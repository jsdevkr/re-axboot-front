import { ConfigReducer, ConfigActionType } from "../common/@interface";

export const configReducer: ConfigReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case ConfigActionType.SET_WIDTH:
      state.width = value;
      return;
    case ConfigActionType.SET_SIDER_COLLAPSED:
      state.siderCollapsed = value;
      return;
    default:
      throw new Error();
  }
};
