import React, { useEffect, useRef } from "react";
import CustomInput from "./CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1>hello useRef</h1>
      <CustomInput className="border border-red-500" ref={myRef}></CustomInput>
    </div>
  );
};

export default UseRefExample;
