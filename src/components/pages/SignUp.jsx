import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/images/sociafy-login-icon-logo.png";
import RightImage from "../../assets/images/sociafy-login.png";
import GoogleLogo from "../../assets/images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegister } from "@/hooks/api/mutation/auth/useRegisterAPI";
import { toast } from "sonner";

const registerschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter the correct email for account.")
    .test("no-spaces", "No spaces allowed", (value) => !/\s/.test(value)),
  password: yup.string().min(6, "Password must contain at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(registerschema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useRegister();

  const onSubmit = async (data) => {
    const signUpdata = {
      email: data?.email,
      password: data?.password,
      username: data?.username,
    };
    try {
      const formData = new FormData();
      Object.keys(signUpdata).forEach((key) => {
        if (signUpdata[key] !== undefined && signUpdata[key] !== null) {
          formData.append(key, signUpdata[key].toString());
        }
      });

      await mutate(formData, {
        onSuccess: (response) => {
          console.log(response, "responsebydex");
          toast.success(response?.data?.message || "Registration successful");
          navigate("/login");
          console.log(response, "responsebydex");
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
      <div className="w-full max-w-6xl flex flex-col md:flex-row  overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-[8.75rem] mb-8" />
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Please provide your information below to create an account.
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div>
              <label
                className="block text-sm font-semibold mb-4"
                htmlFor="username"
              >
                User Name
              </label>
              <input
                {...register("username")}
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>
            {/* Email Field */}
            <div>
              {errors.email && (
                <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                  {errors.email?.message}
                </div>
              )}
              <label
                className="block text-sm font-semibold mb-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>
            {/* Password Field */}
            <div>
              <label
                className="block text-sm font-semibold mb-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                name="password"
                type="password"
                id="password"
                placeholder="Create your password"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>
            {errors.password && (
              <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                {errors.password?.message}
              </div>
            )}

            <div>
              <label
                className="block text-sm font-semibold mb-4"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>

            {errors.confirmPassword && (
              <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                {errors.confirmPassword?.message}
              </div>
            )}

            {/* Forgot Password */}
            <div className="text-left">
              <a href="#" className="text-sm font-medium">
                By proceeding, You have agreed to Sociafy’s{" "}
                <span className=" text-[#7B36E7]">Terms </span> and{" "}
                <span className=" text-[#7B36E7]"> Privacy policy</span>
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-105"
            >
              {isPending ? "registering..." : "Sign Up"}
            </button>
          </form>

          {/* Divider
          <div className="flex items-center my-10">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          Google Login Button
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg text-sm font-bold transform transition-transform duration-300 hover:scale-105">
          <img src={GoogleLogo} alt="Google Logo" className="w-10 h-10 mr-3" />
            Sign Up Using Google
          </button> */}

          {/* Create Account */}
          <p className="text-sm text-gray-600 mt-4 text-center ">
            Do you already have an account?{" "}
            <Link to="/login">
              <a
                href="#"
                className="text-[#7B36E7] text-sm font-medium hover:underline"
              >
                login
              </a>
            </Link>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#622BB9] items-center justify-center">
          <img
            src={RightImage}
            alt="Login Visual"
            className="w-full h-full object-contain mx-10 px-4"
          />
        </div>
      </div>
    </div>
  );
}
