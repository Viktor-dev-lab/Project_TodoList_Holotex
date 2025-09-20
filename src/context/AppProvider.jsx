import {createContext, useState} from 'react';

/* eslint-disable-next-line react-refresh/only-export-components */
export const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [selectIDCategory, setSelectIDCategory] = useState("work");
  const [countCategory, setCountCategory] = useState({});

  return (
	<Appcontext.Provider value={{ selectIDCategory, setSelectIDCategory, countCategory, setCountCategory }}>
    {children}
  </Appcontext.Provider>
  );
};

export default AppProvider;