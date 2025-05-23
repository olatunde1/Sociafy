import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const signUp = (data) => {
  return axiosInstance.post(`/user/signup`, data);
};

const useRegister = () => {
  return useMutation({
    mutationFn: (data) => signUp(data),
  });
};

export { useRegister };
