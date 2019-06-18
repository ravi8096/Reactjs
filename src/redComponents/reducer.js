// store
const initialState = {
    counter: 10
  };
  
  // reducer
  export const testReducer = (state = initialState, action) => {
    console.log(action.increment);
    console.log(state.counter);
    if (action.type === "ADD") {
      return {
        counter: state.counter + action.incrementBy
      };
    }
    return state;
  };
  