import * as constants from '../action/constants'
import { fromJS } from 'immutable'

// const defaultState = fromJS({
//   menuName: '首页'
// })

export default (state, action) => {
  switch(action.type) {
    case constants.SWITCH_MENU: 
      return {
        ...state,
        menuName: action.menuName
      };
    default: 
      return {...state};
  }
}