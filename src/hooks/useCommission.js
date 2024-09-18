import { useMutation, useQuery, useQueryClient } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";
import { errorResponse, successResponse } from "../utils/handleResponse";

const commissions = () => {
  return api.get(serverRoutes.COMMISSIONS);
};

export const useCommissions = () => {
  const { data, isLoading } = useQuery("commissions", commissions);
  return { commissions: data?.data?.data, isLoading };
};

const createCommission = (commissionData) => {
  return api.post(serverRoutes.COMMISSIONS, commissionData);
};

export const useCreateCommission = () => {
  const queryClient = useQueryClient();
  return useMutation("createCommission", createCommission, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("commissions");
    },
    onError: (err) => errorResponse(err),
  });
};

const deleteCommission = (id) => {
  return api.delete(`${serverRoutes.COMMISSIONS}/${id}`);
};

export const useDeleteCommission = () => {
  const queryClient = useQueryClient();
  return useMutation("deleteCommission", deleteCommission, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("commissions");
    },
    onError: (err) => errorResponse(err),
  });
};

const singleCommission = (id) => {
  return api.get(`${serverRoutes.COMMISSIONS}/${id}`);
};

export const useSingleCommission = (id) => {
  const { data, isLoading } = useQuery("singleCommission", () =>
    singleCommission(id),
  );
  return { commission: data?.data?.data, isLoading };
};

const updateCommission = (updateCommission) => {
  return api.put(
    `${serverRoutes.COMMISSIONS}/${updateCommission?._id}`,
    updateCommission,
  );
};

export const useUpdateCommission = () => {
  const queryClient = useQueryClient();
  return useMutation("updateCommission", updateCommission, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("commissions");
    },
    onError: (err) => errorResponse(err),
  });
};
