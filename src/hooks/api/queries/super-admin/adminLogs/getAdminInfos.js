import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ALLORDERS = "getALLOrders";
export const QUERY_KEY_Overview = "getOverview";
export const QUERY_KEY_Users = "getUsers";
export const QUERY_KEY_SingleUser = "getSingleUser";
export const QUERY_KEY_SingleOrder = "getSingleOrder";
export const QUERY_KEY_SingleWallet = "getSingleWallet";

const GetOrders = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/orders`, {
    params,
  });

  return response.data;
};

const GetOverview = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/overview`, {
    params,
  });

  return response.data;
};
const GetUsers = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/users`, {
    params,
  });

  return response.data;
};
const GetSingleUser = async (id, params = {}) => {
  const response = await axiosInstance.get(`/admin/users/${id}`, {
    params,
  });

  return response.data;
};

const GetSingleUserOrders = async (id, params = {}) => {
  const response = await axiosInstance.get(`/admin/users/order/history/${id}`, {
    params,
  });

  return response.data;
};
const GetSingleUserWallet = async (id, params = {}) => {
  const response = await axiosInstance.get(
    `/admin/users/wallet/history/${id}`,
    {
      params,
    }
  );

  return response.data;
};

const getAdminOrders = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLORDERS, params],
    queryFn: () => GetOrders(params),
    staleTime: 10,
  });
};
const getAdminOverview = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_Overview, params],
    queryFn: () => GetOverview(params),
    staleTime: 100,
  });
};
const getAdminUsers = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_Users, params],
    queryFn: () => GetUsers(params),
    staleTime: 100,
  });
};
const getAdminSingleUser = (id, params) => {
  return useQuery({
    queryKey: [QUERY_KEY_SingleUser, id, params],
    queryFn: () => GetSingleUser(id, params),
    staleTime: 100,
  });
};
const getAdminSingleUserOrders = (id, params) => {
  return useQuery({
    queryKey: [QUERY_KEY_SingleOrder, id, params],
    queryFn: () => GetSingleUserOrders(id, params),
    staleTime: 100,
  });
};
const getAdminSingleUserWallet = (id, params) => {
  return useQuery({
    queryKey: [QUERY_KEY_SingleWallet, id, params],
    queryFn: () => GetSingleUserWallet(id, params),
    staleTime: 100,
  });
};

export {
  getAdminOrders,
  getAdminOverview,
  getAdminUsers,
  getAdminSingleUser,
  getAdminSingleUserOrders,
  getAdminSingleUserWallet,
};
