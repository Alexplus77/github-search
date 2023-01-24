import { Avatar, Card, Skeleton } from "antd";
import { IUser } from "../../Redux/usersDataSlice";
import React from "react";

import s from "./UserCard.module.css";
import {useAppSelector} from "../../hooks/reduxHooks";

interface ICardProps {
  user: IUser;

}

export const UserCard = ({ user}: ICardProps) => {
    const { users: usersList, isLoading } = useAppSelector(
        (state) => state.usersData
    );
  return (
    <Card key={user.id}>
      <div className={s.userCard}>
        {isLoading ? (
          <>
            <Skeleton.Avatar
              active={isLoading}
              style={{ width: "200px", height: "200px" }}
            />
            <Skeleton.Node
              active={isLoading}
              style={{ width: "200px", height: "50px" }}
            />
          </>
        ) : (
          <>
            <Avatar
              style={{ width: "200px", height: "200px" }}
              key={user.id}
              shape={"circle"}
              src={user.avatar_url}
            />
            <a href={user.html_url} target={"_blank"}>
              {user.login}{" "}
            </a>
          </>
        )}
      </div>
    </Card>
  );
};
