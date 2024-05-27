import { legacy_createStore as createStore } from "redux";
import { bindActionCreators } from "redux";
import { combineReducers } from "redux";

console.log("Ready to start");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";

//Action Creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function stockCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProp: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTORED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer); //Reducer holds the initial application state.
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  //Listener: Every time the store update, log it on console.
  console.log("updated state", store.getState())
);

//Execute Actions to update the state (1st way)
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(stockCake(3));

//Execute Actions using bindActionCreators
// const actions = bindActionCreators({ orderCake, stockCake }, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.stockCake(3);

unsubscribe(); //Listener removed
