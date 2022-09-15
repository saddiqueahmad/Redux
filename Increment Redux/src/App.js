import React from 'react';
import { connect } from 'react-redux';
import { increment,decrement } from './action/task';

const App = ({sampleData, increment, decrement}) => {
  return (
    <div style={{textAlign: 'center'}}>
    
        <button  onClick={()=> increment(1)}>ADD BY 1</button>
        {sampleData}
        <button  onClick={()=> decrement(1)}>SUB BY 1</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    sampleData: state.data.value
  });
  
  
  export default connect(mapStateToProps, {increment, decrement})(App);