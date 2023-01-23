import React, { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { fetchUsers } from "./Redux/middlewares/fetchUsers";
import { UserCard } from "./components/UserCard";
import useDebounce from "./hooks/useDebounce";
import { Input } from "antd";
import { IUser } from "./Redux/usersDataSlice";

function App() {
  const { users: usersList, isLoading } = useAppSelector(
    (state) => state.usersData
  );
  const [change, setChange] = useState(" ");
  const [data, loading] = useDebounce(change);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(data));
  }, [data]);

  const onChange = (values: React.ChangeEvent<HTMLInputElement>) => {
    setChange(values.target.value);
  };

  return (
    <div className="App">
      <Input
        style={{ width: "200px" }}
        onChange={onChange}
        placeholder={"Search a github users"}
      />
      <section className={"usersListContainer"}>
        {usersList.map((user: IUser) => (
          <UserCard key={user.id} user={user} loading={isLoading} />
        ))}
      </section>
    </div>
  );
}

export default App;
