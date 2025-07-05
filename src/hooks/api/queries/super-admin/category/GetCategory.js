import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

export const QUERY_KEY_ALLCATEGORY = "getALLCategory";

const GetCategory = async (params = {}) => {
  const response = await axiosInstance.get(`/admin/category`, {
    params,
  });

  return response.data;
};

const useGetCategory = (params) => {
  return useQuery({
    queryKey: [QUERY_KEY_ALLCATEGORY, params],
    queryFn: () => GetCategory(params),
    staleTime: 10,
  });
};

export default useGetCategory;
