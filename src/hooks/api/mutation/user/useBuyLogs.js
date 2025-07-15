import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const BuyLogs = (data) => {
  return axiosInstance.post(`/user/buy/logs`, data);
};

const useBuyLogs = () => {
  return useMutation({
    mutationFn: (data) => BuyLogs(data),
  });
};

export { useBuyLogs };
