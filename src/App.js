import React from 'react';
import Effects from './Effect';
import { useFoodsContext } from './context/FoodsContext';

const A = () => {
  const { food = {} } = useFoodsContext();

  const { name } = food;

  return <div>{name}</div>;
};

const B = () => {
  const { food = {} } = useFoodsContext();

  const { name } = food;

  return <div>{name}</div>;
};

const App = () => {
  return (
    <>
      <Effects />
      <A />
      <B />
    </>
  );
};

export default App;
