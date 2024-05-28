import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

//This functions is an example of making API calls (async operation) in Redux using Thunk middleware.

//Intial State
const intiialState = {
  users: [],
  loading: false,
  error: "",
};

//Actions
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

//Action Creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const fetchUserSucceded = (users) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: users,
  };
};
const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

//Reducer
const reducer = (state = intiialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_USER_FAILED:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

//This is our async action creator which can take dispatch as an argument. It is possible with the help of thunk middleware. It return
// a function with dispatch as an argument. In other words with the help of thunk, the action creator can return dispatching functions.

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSucceded(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
