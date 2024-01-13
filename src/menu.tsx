import { createContext, useContext } from "react";

export const menuContex = createContext(null);

export const MenuList = ({ children }) => {
  return (
    <menuContex.Provider value={{ theme: "dark" }}>
      <ul>{children}</ul>
    </menuContex.Provider>
  );
};

export const MenuItems = () => {
  const { theme } = useContext(menuContex);
  console.log(theme);
  return <div>Menu Items</div>;
};
