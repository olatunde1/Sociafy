import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ALLWEBLOGS = "getALLWebLogs";

const GetWebLogs = async (params = {}) => {
  const response = await axiosInstance.get(`/user/logs`, {
    params,
  });

  return response.data;
};

const getWebLogs = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLWEBLOGS, params],
    queryFn: () => GetWebLogs(params),
    staleTime: 10,
  });
};

export default getWebLogs;
