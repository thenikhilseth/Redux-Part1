import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAction } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Call API only one time
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  //JSX
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading ?? <div> Loading... </div>} {/*If loading is True*/}
      {/*If loading is False and Error is there*/}
      {!user.loading && user.error ? (
        <div>{user.error.message}</div>
      ) : null}{" "}
      {/*If loading is False and Data is there*/}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
