import React, { forwardRef } from "react";

type TCustomProps = {
  className: string;
};
const CustomInput = forwardRef<HTMLInputElement, TCustomProps>(
  ({ className }, inputRef) => {
    return (
      <input
        ref={inputRef}
        type="text"
        name="name"
        id="name"
        className={className}
      />
    );
  }
);

export default CustomInput;
