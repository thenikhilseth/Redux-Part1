import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

export const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of Cakes- {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        Order Cake
      </button>
      <button onClick={() => dispatch(cakeActions.restocked(10))}>
        Restore Cake
      </button>
    </div>
  );
};
