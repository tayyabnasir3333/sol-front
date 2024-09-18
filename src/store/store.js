import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./slices/auth";

const persistConfig = {
  key: "root",
  storage,
};
const authPersist = persistReducer(persistConfig, auth);

const store = configureStore({
  reducer: {
    auth: authPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
