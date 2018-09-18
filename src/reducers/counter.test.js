import counter from './counter';
import * as types from '../constants/actionTypes';

describe('counter reducer', () => {

  it('has default state', () => {
    expect(counter(undefined, {})).toEqual(0);
  });
  
  it(`handles ${types.INCREMENT_COUNTER} action`, () => {
    expect(counter(2, {
      type: types.INCREMENT_COUNTER
    })).toEqual(3);
  });

  it(`handles ${types.DECREMENT_COUNTER} action`, () => {
    expect(counter(2, {
      type: types.DECREMENT_COUNTER
    })).toEqual(1);
  });

});
