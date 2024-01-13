import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";
import useUserData from "../hooks/useUserData";

const UserData = () => {
  const { loading, data, error } = useUserData();
  return (
    <div className="flex flex-wrap gap-10">
      {data.map((item) => (
        <ShowData
          key={item.id}
          item={item}
          loading={loading}
          error={error}
        ></ShowData>
      ))}
    </div>
  );
};

export default UserData;
