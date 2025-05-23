import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/images/sociafy-login-icon-logo.png";
import RightImage from "../../assets/images/sociafy-login.png";
import GoogleLogo from "../../assets/images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useLogin } from "@/hooks/api/mutation/auth/useLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

const Loginschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter the correct email for account.")
    .test("no-spaces", "No spaces allowed", (value) => !/\s/.test(value)),
  password: yup.string().min(6, "Password must contain at least 6 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(Loginschema),
    mode: "onChange",
  });

  const { setAccessToken, setCurrentUser } = useAuthStore();
  const { mutateAsync, isPending } = useLogin();

  const onSubmit = async (data) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };
    try {
      const formData = new FormData();
      Object.keys(loginData).forEach((key) => {
        if (loginData[key] !== undefined && loginData[key] !== null) {
          formData.append(key, loginData[key].toString());
        }
      });

      await mutateAsync(formData, {
        onSuccess: (response) => {
          const token = response?.data?.data?.token;
          const user = response?.data?.data;
          if (token && user) {
            setAccessToken(token);
            setCurrentUser(user);
          }

          toast.success(response?.data?.message || "Login successful");
          navigate("/dashboard");
          console.log(response, "responsebyzeek");
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 md:px-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row shadow-lg overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-[8.75rem] mb-8" />
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">Login</h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Please provide your information below to access your account.
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div>
              {errors.email && (
                <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                  {errors.email?.message}
                </div>
              )}
              <label className="block text-sm font-medium mb-4" htmlFor="email">
                Email
              </label>
              <input
                {...register("email")}
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>

            {/* Password Field */}
            <div>
              {errors.password && (
                <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                  {errors.password?.message}
                </div>
              )}
              <label
                className="block text-sm font-medium mb-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-[#7B36E7] hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            {/* <Link to="/dashboard"> */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-105"
            >
              {isPending ? "loading..." : "Login"}
            </button>
            {/* </Link> */}
          </form>

          {/* Create Account */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/sign-up">
              <a
                href="#"
                className="text-[#7B36E7] text-sm font-medium hover:underline"
              >
                Create Account
              </a>
            </Link>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#622BB9] items-center justify-center">
          <img
            src={RightImage}
            alt="Login Visual"
            className="w-full h-full object-contain mt-16 mx-10 px-4"
          />
        </div>
      </div>
    </div>
  );
}
