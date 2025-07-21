import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ALLLOGS = "getALLLogs";

const GetLogs = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/logs`, {
    params,
  });

  return response.data;
};

const useAdminLogs = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLLOGS, params],
    queryFn: () => GetLogs(params),
    staleTime: 10,
  });
};

export default useAdminLogs;
