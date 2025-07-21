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

export default function ForgetPassword() {
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

            <Link to="/login" className="flex items-center mb-6 text-[#622BB9] hover:underline">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Login
        </Link>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Forgot Password</h1>
          {/* Description */}
          <p className="text-gray-600 mb-6">
           Please provide the email associated with your account to reset your password.
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r mt-5 from-[#622BB9] to-[#351A60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-105"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </form>  
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
