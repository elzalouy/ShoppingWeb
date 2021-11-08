import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user";
import ProductSlice from "./products";
const store = configureStore({
  reducer: {
    User: UserSlice,
    Products: ProductSlice,
  },
});

export default store;
