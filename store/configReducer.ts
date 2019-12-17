import { ConfigReducer, ConfigActionType } from "../common/@interface";

export const configReducer: ConfigReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case ConfigActionType.SET_HEIGHT:
      return { ...state, width: value };
    default:
      throw new Error();
  }
};
