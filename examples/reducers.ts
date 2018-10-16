import { Action } from "../src/interfaces";
import { ACTIONS } from "./Actions";

export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count + action.payload.value };
    default:
      return state;
  }
};
