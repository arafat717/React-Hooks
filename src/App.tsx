// import { useState } from "react";
import { useContext } from "react";
import "./App.css";
import { TThemeContex, ThemeContex } from "./contex/ThemeProvider";
import { MenuItems, MenuList } from "./menu";
import Profile from "./hooksPages/Profile";
import GameResult from "./hooksPages/GameResult";
import UserData from "./components/UserData";
import Select from "./components/Select";
import SelectOption from "./components/SelectOption";
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
      {/* <MenuList>
        <MenuItems></MenuItems>
      </MenuList> */}
      {/* <button className="btn btn-primary" onClick={() => setDark(!dark)}>
        toggle
      </button> */}
      {/* <Profile></Profile> */}
      {/* <GameResult></GameResult> */}
      {/* <UserData></UserData> */}
      <Select>
        {/* <SelectOption value="option1">Option1</SelectOption>
        <SelectOption value="option2">Option2</SelectOption>
        <SelectOption value="option3">Option3</SelectOption>
        <SelectOption value="option4">Option4</SelectOption> */}
        <Select.SelectOption value="option1">Option1</Select.SelectOption>
        <Select.SelectOption value="option2">Option2</Select.SelectOption>
        <Select.SelectOption value="option3">Option3</Select.SelectOption>
        <Select.SelectOption value="option4">Option4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
