import React, { useState } from "react";

const FormUseState = () => {
  const [user, setUser] = useState({ name: "", email: "", age: "", game: "" });
  const handleFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    e.target.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };
  return (
    <div>
      <form onSubmit={handleFrom}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id=""
          className="border"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          className="border"
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          id=""
          className="border"
        />
        <input
          onChange={handleChange}
          type="text"
          name="game"
          id=""
          className="border"
        />

        <input type="submit" value="submit" className="btn" />
      </form>
    </div>
  );
};

export default FormUseState;
