// import { useState } from "react";
import { useContext } from "react";
import "./App.css";
import { TThemeContex, ThemeContex } from "./contex/ThemeProvider";
import { MenuItems, MenuList } from "./menu";
// import UseEffectExample from "./UseEffectExample";
// import UseRefExample from "./UseRefExample";
// import UseReducerExample from "./UseReducerExample";
// import FormUseState from "./FormUseState";
// import UseStateExample from "./useStateExample";

function App() {
  // const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContex) as TThemeContex;
  console.log(dark);
  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample> */}
      {/* <FormUseState></FormUseState> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <UseRefExample></UseRefExample> */}
      <MenuList>
        <MenuItems></MenuItems>
      </MenuList>
      <button className="btn btn-primary" onClick={() => setDark(!dark)}>
        toggle
      </button>
    </div>
  );
}

export default App;
