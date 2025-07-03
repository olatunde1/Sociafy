import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/hooks/axiosInstace";

const SingleFileUpload = ({ formData, onUploadProgress }) => {
  return axiosInstance.post(`/admin/bulk-upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const useSingleFileUpload = () => {
  return useMutation({
    mutationFn: ({ formData, onUploadProgress }) =>
      SingleFileUpload({ formData, onUploadProgress }),
  });
};

export default useSingleFileUpload;
