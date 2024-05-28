import { legacy_createStore as createStore } from "redux";
import { bindActionCreators } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger"; //We are using npm redux logger as a middleware in our app.

//This code is just an example in which we are dealing with 2 states- Cakes and Ice cream and using redux to update them.

console.log("Ready to start");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

//Action Creator

//Cake Actions
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function stockCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

//Ice cream actions
function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function stockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTORED,
    payload: qty,
  };
}

//States
const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIceCream: 50,
};

//Reducers

const reducerCake = (state = initialCakeState, action) => {
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

const reducerIceCream = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    case ICECREAM_RESTORED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

//Combining Reducers
const rootReducer = combineReducers({
  cake: reducerCake,
  iceCram: reducerIceCream,
});

const store = createStore(rootReducer, applyMiddleware(logger.default)); //Using logger as middleware
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("Entering Subscribe"));

//Execute Actions to update the cake state
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(stockCake(3));

//Execute Actions to update the iceCream state
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(stockIcecream(10));

unsubscribe(); //Listener removed
