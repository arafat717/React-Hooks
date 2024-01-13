import React from "react";

const UserAvater = ({ image }) => {
  return (
    <div>
      <img src={image} alt="" className="w-16 rounded-full" />
    </div>
  );
};

export default UserAvater;
