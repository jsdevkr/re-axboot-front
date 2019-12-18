import { ConfigReducer, ConfigActionType } from "../common/@interface";

export const configReducer: ConfigReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case ConfigActionType.SET_WIDTH:
      state[ConfigActionType.SET_WIDTH] = value;
      return state;
    default:
      throw new Error();
  }
};
