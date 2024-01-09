import { ChangeEvent, useReducer } from "react";

type Taction = {
  type: string;
  payload: string;
};

const initialstate = { name: "", email: "", age: "", game: "" };

const reducer = (currentstate: typeof initialstate, action: Taction) => {
  switch (action.type) {
    case "addName":
      return { ...currentstate, name: action.payload };
    case "addEmail":
      return { ...currentstate, email: action.payload };
    case "addAge":
      return { ...currentstate, age: action.payload };
    case "addGame":
      return { ...currentstate, game: action.payload };
    default:
      return currentstate;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const handleFrom = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleFrom}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          className="border"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="email"
          name="email"
          id="email"
          className="border"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="text"
          name="age"
          id="age"
          className="border"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addGame", payload: e.target.value })
          }
          type="text"
          name="game"
          id="game"
          className="border"
        />

        <input type="submit" value="submit" className="btn" />
      </form>
    </div>
  );
};

export default UseReducerExample;
