import * as types from '../constants/actionTypes';

export const incrementCounter = () => ({
  type: types.INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: types.DECREMENT_COUNTER
});
