import { useQuery } from 'react-query';

export const useFoods = () => {
  const result = useQuery(
    'foods',
    async () => {
      const foods = await fetch('https://www.fastmock.site/mock/47b019ca209e0947a2aab9a5bd448d16/hug/foods');
      return foods.json();
    }
  );

  return {
    ...result
  };
};
