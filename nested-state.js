import { legacy_createStore as createStore } from "redux";
import { produce } from "immer";

//This code is all about using immer package to update the states.

const initialState = {
  name: "Nikhil",
  address: {
    street: "5685 Av Gatineu",
    city: "Montreal",
    state: "Quebec",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const UpdateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(UpdateStreet("3800 Av Dupuis"));
unsubscribe();
