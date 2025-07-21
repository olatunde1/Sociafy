import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_topup = "getTopup";

const getTopup = async (params = {}) => {
  const response = await axiosInstance.get(`/user/topup-history`, {
    params,
  });

  return response.data;
};

const useTopupHistory = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_topup, params],
    queryFn: () => getTopup(params),
    staleTime: 10,
  });
};

export default useTopupHistory;
