import { Avatar, Card, Skeleton } from "antd";
import { IUser } from "../../Redux/usersDataSlice";
import React from "react";
// @ts-ignore
import s from "./UserCard.module.css";

interface ICardProps {
  user: IUser;
  loading: boolean;
}

export const UserCard = ({ user, loading }: ICardProps) => {
  return (
    <Card key={user.id}>
      <div className={s.userCard}>
        {loading ? (
          <>
            <Skeleton.Avatar
              active={loading}
              style={{ width: "200px", height: "200px" }}
            />
            <Skeleton.Node
              active={loading}
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
