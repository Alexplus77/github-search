import { Avatar, Card, Skeleton } from "antd";
import { IUser } from "../../Redux/usersDataSlice";
import React from "react";

import style from "./UserCard.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";

interface ICardProps {
  users: IUser;
}

export const UserCard = ({ users }: ICardProps) => {
  const { isLoading } = useAppSelector((state) => state.usersData);
  return (
    <Card key={users.id}>
      <div className={style.userCard}>
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
              key={users.id}
              shape={"circle"}
              src={users.avatar_url}
            />
            <a href={users.html_url} target={"_blank"}>
              {users.login}{" "}
            </a>
          </>
        )}
      </div>
    </Card>
  );
};
