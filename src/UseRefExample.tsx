import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1>hello useRef</h1>
      <input
        ref={myRef}
        type="text"
        name="name"
        id="name"
        className="border border-red-500"
      />
    </div>
  );
};

export default UseRefExample;
