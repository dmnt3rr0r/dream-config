// @flow
import { INC, DEC } from '../actions/dreamc.js'

export type CounterState = number;
export type CounterAction = {
  type: string,
  payload: string
};

export const dreamc = (state: CounterState = 0, action: CounterAction) => {
  switch(action.type) {
    case INC:
      return state + 1;
      break;
    case DEC:
      return state - 1;
      break;
    default:
      return state;
  }
};
