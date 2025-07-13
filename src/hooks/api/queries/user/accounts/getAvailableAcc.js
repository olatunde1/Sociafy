
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_Accs = "getAccs";

const getAccounts = async (params = {}) => {
  const response = await axiosInstance.get(`/user/available-accounts`, {
    params,
  });

  return response.data;
};

const getAvailableAccounts = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_Accs, params],
    queryFn: () => getAccounts(params),
    staleTime: 10,
  });
};

export default getAvailableAccounts;
