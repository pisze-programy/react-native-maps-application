import * as types from "../actions/actionTypes";

export default function drawerReducer(state = {}, action) {
  let prepare;

  switch (action.type) {
    case types.HIDE_DRAWER:
      prepare = {
        visible: false,
      };
      return Object.assign({}, action.payload, prepare);

    case types.SHOW_DRAWER:
      prepare = {
        visible: true,
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}
