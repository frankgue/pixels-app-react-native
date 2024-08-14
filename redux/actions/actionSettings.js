import { SET_SETTINGS } from "../constants";

export const setCategorySettings = (saveSettingsObj) => {
  return {
    type: SET_SETTINGS,
    settings: saveSettingsObj,
  };
};
