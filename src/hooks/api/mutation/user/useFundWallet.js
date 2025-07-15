import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const fundWallet = (data) => {
  return axiosInstance.post(`/user/initialize-fund`, data);
};

const useFundWallet = () => {
  return useMutation({
    mutationFn: (data) => fundWallet(data),
  });
};

export { useFundWallet };
