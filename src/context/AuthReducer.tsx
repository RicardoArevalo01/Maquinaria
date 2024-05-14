import {Place, UserInfo} from '../interfaces';

type Action =
  | {type: 'SELECTED_PLACE'; selectedPlace: Place}
  | {type: 'SELECTED_PLACE'; selectedPlace: Place};
export const authReducer = (state: UserInfo, action: Action): UserInfo => {
  switch (action.type) {
    case 'SELECTED_PLACE':
      return {...state, selectedPlace: action.selectedPlace};
    default:
      return state;
  }
};
