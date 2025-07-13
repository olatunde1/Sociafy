import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_PAYMENTHIST = "getPaymentHistory";
export const QUERY_KEY_ORDERHIST = "getOrdersHistory";

const getPaymentHistory = async (params = {}) => {
  const response = await axiosInstance.get(`/user/payment-history`, {
    params,
  });

  return response.data;
};

const getOrdersHistory = async (params = {}) => {
  const response = await axiosInstance.get(`/user/order-history`, {
    params,
  });

  return response.data;
};

const getPayment = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_PAYMENTHIST, params],
    queryFn: () => getPaymentHistory(params),
    staleTime: 10,
  });
};
const getOrders = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ORDERHIST, params],
    queryFn: () => getOrdersHistory(params),
    staleTime: 10,
  });
};

export { getPayment, getOrders };
