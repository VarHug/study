import { useEffect } from 'react';
import { useFoods } from './service/foods.service';
import { useFoodsContext } from './context/FoodsContext';

const Effects = () => {

  const results = useFoods();

  const isSuccess = results.isSuccess;

  const foods = results.data?.data;

  const { setFood } = useFoodsContext();

  useEffect(() => {
    setFood(foods?.[0]);
  }, [isSuccess]);

  return null;
};

export default Effects;
