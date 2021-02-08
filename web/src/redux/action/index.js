import * as constants from './constants';

export const switchMenu = (menuName) => ({
  type: constants.SWITCH_MENU,
  menuName
});