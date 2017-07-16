import * as types from "./actionTypes";

export function hideDrawer(payload) {
  return {type: types.HIDE_DRAWER, payload};
}

export function showDrawer(payload) {
  return {type: types.SHOW_DRAWER, payload};
}
