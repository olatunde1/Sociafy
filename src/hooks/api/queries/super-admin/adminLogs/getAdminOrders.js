import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ALLORDERS = "getALLOrders";

const GetOrders = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/orders`, {
    params,
  });

  return response.data;
};

const getAdminOrders = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLORDERS, params],
    queryFn: () => GetOrders(params),
    staleTime: 10,
  });
};

export default getAdminOrders;
