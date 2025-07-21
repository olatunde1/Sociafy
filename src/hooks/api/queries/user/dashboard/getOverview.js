import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_USEROVERVIEW = "getUserOverview";
export const QUERY_KEY_USERPROFILE = "getProfile";

const getOverview = async (params = {}) => {
  const response = await axiosInstance.get(`/user/overview`, {
    params,
  });

  return response.data;
};
const getProfile = async (params = {}) => {
  const response = await axiosInstance.get(`/user/profile`, {
    params,
  });

  return response.data;
};

const useUserOverview = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_USEROVERVIEW, params],
    queryFn: () => getOverview(params),
    staleTime: 10,
  });
};
const useUserProfile = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_USERPROFILE, params],
    queryFn: () => getProfile(params),
    staleTime: 10,
  });
};

export { useUserOverview, useUserProfile };
