import React, { useContext, useEffect, useRef } from "react";
import CustomInput from "./CustomInput";
import { menuContex } from "./menu";

const UseRefExample = () => {
  const { theme } = useContext(menuContex);
  console.log(theme);
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
