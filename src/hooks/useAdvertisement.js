import { useMutation, useQuery, useQueryClient } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";
import { errorResponse, successResponse } from "../utils/handleResponse";

const advertisement = (status) => {
  return api.get(`${serverRoutes.ADVERTISEMENT}/getAll/${status}`);
};

export const useAdvertisement = (status) => {
  const { data, isLoading } = useQuery(
    "advertisement",
    () => advertisement(status),
    { enabled: !!status },
  );
  return { advertisement: data?.data?.data, isLoading };
};

const deleteAdvertisement = (id) => {
  return api.delete(`${serverRoutes.ADVERTISEMENT}/${id}`);
};

export const useDeleteAdvertisement = () => {
  const queryClient = useQueryClient();
  return useMutation("deleteCommission", deleteAdvertisement, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("advertisement");
    },
    onError: (err) => errorResponse(err),
  });
};

const singleAdvertisement = (id) => {
  return api.get(`${serverRoutes.ADVERTISEMENT}/${id}`);
};

export const useSingleAdvertisement = (id) => {
  const { data, isLoading } = useQuery(["singleAdvertisement", id], () =>
    singleAdvertisement(id),
  );
  return { advertisement: data?.data?.data, isLoading };
};

const singleAdvertisementToken = (id) => {
  return api.get(`${serverRoutes.ADVERTISEMENT_TOKEN}/${id}`);
};

export const useSingleAdvertisementToken = (id) => {
  const { data, isLoading } = useQuery(["singleAdvertisement", id], () =>
    singleAdvertisementToken(id),
  );
  return { advertisement: data?.data?.data, isLoading };
};

const updateAdvertisement = (updateAdvertisement) => {
  return api.put(
    `${serverRoutes.ADVERTISEMENT}/${updateAdvertisement?._id}`,
    updateAdvertisement,
  );
};
const alwaysApprovePost = (updateAdvertisement) => {
  return api.put(
    `${serverRoutes.ALWAYS_APPROVE_ADVERTISEMENT}`,
    updateAdvertisement,
  );
};

export const useUpdateAdvertisement = () => {
  const queryClient = useQueryClient();
  return useMutation("updateAdvertisement", updateAdvertisement, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("advertisement");
    },
    onError: (err) => errorResponse(err),
  });
};
export const useAlwaysApproveAdvertisement = () => {
  const queryClient = useQueryClient();
  return useMutation("alwaysApproveAdvertisement", alwaysApprovePost, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("advertisement");
    },
    onError: (err) => errorResponse(err),
  });
};

const singleAdvertisementDetailByUserId = (id) => {
  return api.get(`${serverRoutes.ADVERTISEMENT}/getAdvertInfoByUser/${id}`);
};

export const useSingleAdvertisementDetailByUserId = (id) => {
  const { data, isLoading } = useQuery(["singleAdvertisement", id], () =>
    singleAdvertisementDetailByUserId(id),
  );
  return { advertisementData: data?.data?.data, isLoading };
};
