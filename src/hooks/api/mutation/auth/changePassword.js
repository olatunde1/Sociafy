import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const changePassword = (data) => {
  return axiosInstance.patch(`/user/change-password`, data);
};

const useChangePassword = () => {
  return useMutation({
    mutationFn: (data) => changePassword(data),
  });
};

export { useChangePassword };
