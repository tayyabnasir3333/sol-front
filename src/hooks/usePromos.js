import { useMutation, useQuery, useQueryClient } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";
import { errorResponse, successResponse } from "../utils/handleResponse";

const promos = () => {
  return api.get(serverRoutes.PROMOS);
};

export const usePromos = () => {
  const { data, isLoading } = useQuery("promos", promos);
  return { promos: data?.data?.data, isLoading };
};

const createPromo = (promoData) => {
  return api.post(serverRoutes.PROMOS, promoData);
};

export const useCreatePromo = () => {
  const queryClient = useQueryClient();
  return useMutation("createPromo", createPromo, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("promos");
    },
    onError: (err) => errorResponse(err),
  });
};

const deletePromo = (id) => {
  return api.delete(`${serverRoutes.PROMOS}/${id}`);
};

export const useDeletePromo = () => {
  const queryClient = useQueryClient();
  return useMutation("deleteCommission", deletePromo, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("promos");
    },
    onError: (err) => errorResponse(err),
  });
};

const singlePromo = (id) => {
  return api.get(`${serverRoutes.PROMOS}/${id}`);
};

export const useSinglePromo = (id) => {
  const { data, isLoading } = useQuery("singlePromo", () => singlePromo(id));
  return { promo: data?.data?.data, isLoading };
};

const updatePromo = (updatePromo) => {
  return api.put(`${serverRoutes.PROMOS}/${updatePromo?._id}`, updatePromo);
};

export const useUpdatePromo = () => {
  const queryClient = useQueryClient();
  return useMutation("updatePromo", updatePromo, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("promos");
    },
    onError: (err) => errorResponse(err),
  });
};
