import { toast } from "react-hot-toast";

export const errorResponse = (errorData) => {
  toast.error(errorData?.response?.data?.message);
};

export const successResponse = (msg) => {
  toast.success(msg);
};
