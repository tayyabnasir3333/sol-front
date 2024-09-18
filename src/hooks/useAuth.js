import { useMutation, useQueryClient, useQuery } from "react-query";
import { api } from "../axios/interceptor";
import { serverRoutes } from "../constants/serverRoutes";
import { errorResponse, successResponse } from "../utils/handleResponse";
import { useNavigate } from "react-router-dom";
import { browserRoutes } from "../constants/browserRoutes";
import store from "../store/store";
import { setToken, setUser } from "../store/slices/auth";

const login = (loginData) => {
  return api.post(serverRoutes.LOGIN, loginData);
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation("login", login, {
    onSuccess: (res) => {
      store.dispatch(setUser(res?.data?.data));
      store.dispatch(setToken(res?.data?.data?.token));
      successResponse(res?.data?.message);
      navigate(browserRoutes.DASHBOARD);
    },
    onError: (err) => errorResponse(err),
  });
};

const allUsers = () => {
  return api.get(serverRoutes.USERS);
};

export const useAllUsers = () => {
  const { data, isLoading } = useQuery("users", allUsers);
  return { users: data?.data?.data, isLoading };
};

const deleteUser = (id) => {
  return api.delete(`${serverRoutes.DELETE_USER}/${id}`);
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation("deleteUser", deleteUser, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("users");
    },
    onError: (err) => errorResponse(err),
  });
};

const walletUsersAMount = () => {
  return api.get(serverRoutes.WALLET_USERS_AMOUNT);
};

export const useWalletUsersAmount = () => {
  const { data, isLoading } = useQuery("walletUsersAMount", walletUsersAMount);
  console.log(data?.data?.data);
  return { data: data?.data?.data, isLoading };
};

const paidCommission = () => {
  return api.get(serverRoutes.PAID_COMMISSION);
};

export const usepaidCommission = () => {
  const { data, isLoading } = useQuery("paidCommission", paidCommission);
  console.log(data?.data?.data);
  return { data: data?.data?.data, isLoading };
};

const payTheCommission = (payTheCommissionData) => {
  return api.post(serverRoutes.PAY_THE_COMMISSION, payTheCommissionData);
};

export const usePayTheCommission = () => {
  const queryClient = useQueryClient();

  return useMutation("payTheCommission", payTheCommission, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("walletUsersAMount");
    },
    onError: (err) => errorResponse(err),
  });
};

const updateComissionServed = (updateComissionServed) => {
  return api.put(
    `${serverRoutes.UPDATE_COMMISSION_SERVED}/${updateComissionServed?._id}`,
    updateComissionServed,
  );
};

export const useUpdateComissionServed = () => {
  const queryClient = useQueryClient();
  return useMutation("updateComissionServed", updateComissionServed, {
    onSuccess: (res) => {
      successResponse(res?.data?.message);
      queryClient.invalidateQueries("users");
    },
    onError: (err) => errorResponse(err),
  });
};
