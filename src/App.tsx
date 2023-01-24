import React, { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { fetchUsers } from "./Redux/middlewares/fetchUsers";
import { UserCard } from "./components/UserCard";
import useDebounce from "./hooks/useDebounce";
import {changeValue} from "./Redux/usersDataSlice";
import { Input } from "antd";

function App() {
  const { users: usersList, dataValue} = useAppSelector(
    (state) => state.usersData
  );

  const [data] = useDebounce(dataValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(data));
  }, [data]);

  const onChange = (values: any) => {
      dispatch(changeValue(values.target.value))
  };

  return (
    <div className="App">
      <Input
        style={{ width: "200px" }}
        onChange={onChange}
        placeholder={"Search a github users"}
      />
      <section className={"usersListContainer"}>
        {usersList.map((user) => (
          <UserCard key={user.id} user={user}  />
        ))}
      </section>
    </div>
  );
}

export default App;
