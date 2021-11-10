/**
 * onChangeLogin
 *
 * On handle changing input values on the store
 *
 * @param {state} state Current state
 * @param {action} action Action that you need to do
 */

export const onChangeProducts = (state, action) => {
  state.products = action.payload;
};
export const onSelectProduct = (state, action) => {
  state.product = state.products?.find(
    (item) => item._id === action.payload.id
  );
};
const exports = { onChangeProducts, onSelectProduct };
export default exports;
