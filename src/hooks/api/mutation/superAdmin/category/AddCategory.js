import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const AddCategory = ({ formData }) => {
  return axiosInstance.post(`/admin/add/category`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const EditCategory = ({ formData, id }) => {
  return axiosInstance.post(`/admin/edit/category/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const useAddCategory = () => {
  return useMutation({
    mutationFn: ({ formData }) => AddCategory({ formData }),
  });
};

const useEditCategory = () => {
  return useMutation({
    mutationFn: ({ formData, id }) => EditCategory({ formData, id }),
  });
};

export { useAddCategory, useEditCategory };
