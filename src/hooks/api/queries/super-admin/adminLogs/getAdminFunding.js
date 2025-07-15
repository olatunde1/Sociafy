import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ADMINFUNDING = "ADMINFUNDING";

const AdminFunding  = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/wallet/funding`, {
    params,
  });

  return response.data;
};

const getAdminFunding = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ADMINFUNDING, params],
    queryFn: () => AdminFunding(params),
    staleTime: 10,
  });
};

export default getAdminFunding;
