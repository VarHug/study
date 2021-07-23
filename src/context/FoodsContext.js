import React, { useContext, useState } from 'react';

const FoodsContext = React.createContext(null);

export const useFoodsContext = () => useContext(FoodsContext);

export const FoodsProvider = ({ children }) => {
  const [food, setFood] = useState('');

  return (
    <FoodsContext.Provider
      value={{ food, setFood }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
