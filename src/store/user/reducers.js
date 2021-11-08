/**
 * onChangeLogin
 *
 * On handle changing input values on the store
 *
 * @param {state} state Current state
 * @param {action} action Action that you need to do
 */

export const onChangeLogin = (state, action) => {
  action.payload.forEach((item) => {
    state.login[item.element] = item.value;
  });
};
const exports = { onChangeLogin };
export default exports;
