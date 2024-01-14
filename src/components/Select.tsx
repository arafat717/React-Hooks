import { createContext, useContext, useState } from "react";

const SelectedContex = createContext(null);

const Select = ({ children }) => {
  const [selectedoption, setSelectedoption] = useState("");
  console.log(selectedoption);
  return (
    <SelectedContex.Provider value={{ selectedoption, setSelectedoption }}>
      <select onChange={(e) => setSelectedoption(e.target.value)}>
        {children}
      </select>
      ;
    </SelectedContex.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedoption } = useSelectContex();
  const isActive = selectedoption === value;
  return (
    <option className={`${isActive ? "bg-black" : "bg-white"}`} value={value}>
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

const useSelectContex = () => {
  const contex = useContext(SelectedContex);
  if (!contex) {
    throw new Error("Contex out of bound");
  }
  return contex;
};
