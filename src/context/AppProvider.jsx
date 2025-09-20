import {createContext, useState} from 'react';

export const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [selectIDCategory, setSelectIDCategory] = useState("all");

  return (
	<Appcontext.Provider value={{ selectIDCategory, setSelectIDCategory }}>
    {children}
  </Appcontext.Provider>
  );
};

export default AppProvider;