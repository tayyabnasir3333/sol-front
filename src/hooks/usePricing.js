import { useMutation, useQuery, useQueryClient } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";
import { errorResponse, successResponse } from "../utils/handleResponse";

const transactionHistory = (id) => {
  return api.get(`${serverRoutes.TRANSACTION_HISTORY}/${id}`);
};

export const useTransactionHistory = (id) => {
  const { data, isLoading } = useQuery("transactionHistory", () =>
    transactionHistory(id),
  );
  return { transaction: data?.data?.data, isLoading };
};
