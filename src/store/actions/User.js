import * as TYPES from "../types";

export const setCurrentUser = (payload) => {
  return {type: TYPES.SET_CURRENT_USER, payload}
};
