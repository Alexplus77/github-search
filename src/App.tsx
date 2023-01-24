import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { fetchUsers } from "./Redux/middlewares/fetchUsers";
import { UserCard } from "./components/UserCard";
import useDebounce from "./hooks/useDebounce";
import { Input } from "antd";
import { IUser } from "./Redux/usersDataSlice";
import { changeValue } from "./Redux/usersDataSlice";

function App() {
  const { users: usersList, dataValue } = useAppSelector(
    (state) => state.usersData
  );

  const [data] = useDebounce(dataValue);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(data));
  }, [data]);

  const onChange = (values: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(values.target.value));
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
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}

export default App;
