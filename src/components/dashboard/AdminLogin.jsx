import React, { useState } from "react";
import AdminLogo from "../../assets/images/admin-logo.png";
import BackgroundImage from "../../assets/images/background-image.png";
import { useNavigate } from "react-router-dom";
import { useAdminLogin } from "@/hooks/api/mutation/admin-auth/useAdminLogin";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Loginschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter the correct email for account.")
    .test("no-spaces", "No spaces allowed", (value) => !/\s/.test(value)),
  password: yup.string().min(6, "Password must contain at least 6 characters"),
});

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle login logic here
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //     navigate('/admin-dashboard');
  // };

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
  const { mutateAsync, isPending } = useAdminLogin();

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
          response.data.data.role = "super-admin"
          

          if (token && user) {
            setAccessToken(token);
            setCurrentUser(user);
          }

          toast.success(response?.data?.message || "Admin Login successful");
          navigate("/admin/dashboard");
          console.log(response, "responsebyzeek");
          console.log(user, "responsebyzeek");
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "an error occurred");
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <div style={{ ...styles.body, backgroundImage: `url(${BackgroundImage})` }}>
      <div style={styles.container}>
        <div className="mx-auto w-[380px] max-w-[100%] text-center">
          <img src={AdminLogo} alt="Admin Logo" className="mx-auto mb-6" />
          <h2 className="text-2xl font-bold">Admin</h2>
          <p className="text-gray-600">
            Please enter your information below to login to the admin dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={styles.form}
          className="mx-auto"
        >
          {errors.email && (
            <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
              {errors.email?.message}
            </div>
          )}
          <label style={styles.label}>
            Email
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Password
            {errors.password && (
              <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
                {errors.password?.message}
              </div>
            )}
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </label>

          <button
            className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white w-full px-16 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            {isPending ? "loading..." : "Login"}
          </button>

          {/* <Link to="/" className="text-sm text-blue-500 text-center mt-2">← Back to home</Link> */}
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: 500,
    padding: 32,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    background: "#fff",
    textAlign: "center",
    fontFamily: "Urbanist, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    marginTop: 24,
    width: "100%",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontWeight: 500,
    fontSize: 15,
  },
  input: {
    marginTop: 6,
    padding: "10px 12px",
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 15,
    width: "100%",
    boxSizing: "border-box",
  },
  // button: {
  //     marginTop: 18,
  //     padding: '12px',
  //     background: '#E94E30',
  //     color: '#fff',
  //     border: 'none',
  //     borderRadius: 4,
  //     fontWeight: 600,
  //     fontSize: 16,
  //     cursor: 'pointer',
  // },
};

export default AdminLogin;
