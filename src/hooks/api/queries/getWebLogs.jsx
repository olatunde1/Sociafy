import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

// Unique query key for caching and refetching
export const QUERY_KEY_ALLWEBLOGS = "getALLWebLogs";

// API request function
const fetchWebLogs = async (params = {}) => {
  const response = await axiosInstance.get(`/user/logs`, {
    params,
  });
  return response.data;
};

// ✅ Custom hook using `use` prefix
const useWebLogs = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLWEBLOGS, params],
    queryFn: () => fetchWebLogs(params),
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useWebLogs;
