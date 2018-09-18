import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { 
  incrementCounter,
  decrementCounter
} from '../actions/counterActions';

const mapStateToProps = state => {
  return {
    count: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(incrementCounter());
    },
    onDecrement: () => dispatch(decrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default CounterContainer;
