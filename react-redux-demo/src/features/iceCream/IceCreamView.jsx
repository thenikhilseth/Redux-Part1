import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamActions } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Cream- {numOfIceCream}</h2>
      <button onClick={() => dispatch(iceCreamActions.ordered())}>
        Order Icecream
      </button>
      <button onClick={() => dispatch(iceCreamActions.restocked(20))}>
        Restore Icecream
      </button>
    </div>
  );
};
