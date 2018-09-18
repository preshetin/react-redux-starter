import * as types from '../constants/actionTypes';
import {
  incrementCounter,
  decrementCounter
} from './counterActions';

describe('counter actions', () => {
  
  it(`creates ${types.INCREMENT_COUNTER} action`, () => {
    const expectedAction = {
      type: types.INCREMENT_COUNTER
    }
    expect(incrementCounter()).toEqual(expectedAction);
  });

  it(`creates ${types.DECREMENT_COUNTER} action`, () => {
    const expectedAction = {
      type: types.DECREMENT_COUNTER
    }
    expect(decrementCounter()).toEqual(expectedAction);
  });

});
