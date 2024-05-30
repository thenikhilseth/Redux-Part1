import store from "./app/store.js";
import { iceCreamActions } from "./features/iceCream/iceCreamSlice.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { fetchUsersAction } from "./features/user/userSlice.js";

console.log("Intial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(fetchUsersAction());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(10));

// unsubscribe();
