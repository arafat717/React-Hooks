import React from "react";
import UserAvater from "../components/UserAvater";
import WithBorder from "../components/WithBorder";

const UserWithBorder = WithBorder(UserAvater);

const GameResult = () => {
  return (
    <div className="flex gap-10">
      <UserAvater
        image={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></UserAvater>
      <UserWithBorder
        image={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></UserWithBorder>
      <UserAvater
        image={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></UserAvater>
      <UserAvater
        image={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></UserAvater>
    </div>
  );
};

export default GameResult;
