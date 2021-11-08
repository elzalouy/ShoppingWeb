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
const exports = { onChangeProducts };
export default exports;
