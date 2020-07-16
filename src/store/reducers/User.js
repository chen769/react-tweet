import * as types from "../types";

const INITIAL_STATE = {
  currentUser: "hillaryclinton",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
}
