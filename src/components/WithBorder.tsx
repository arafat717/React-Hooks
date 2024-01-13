import React from "react";

const WithBorder = (WraperComponent) => {
  return (props) => (
    <div className="border border-purple-800 border-spacing-96 rounded-full">
      <WraperComponent {...props}></WraperComponent>
    </div>
  );
};

export default WithBorder;
