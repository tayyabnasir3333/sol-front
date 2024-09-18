import { useMutation, useQueryClient } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";
import { errorResponse, successResponse } from "../utils/handleResponse";

const sendNotification = (notificationData) => {
  return api.post(serverRoutes.SEND_NOTIFICATION, notificationData);
};

export const useSendNotification = () => {
  const queryClient = useQueryClient();

  return useMutation("sendNotification", sendNotification, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("notifications");
    },
    onError: (err) => errorResponse(err),
  });
};
