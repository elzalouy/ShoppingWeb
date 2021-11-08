import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: reducers,
});

export const ProductsActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
