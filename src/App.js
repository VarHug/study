import React, { useEffect, useState } from 'react';

const Shop = () => {
  return <div>商品列表页</div>;
};

const ShopItem = () => {
  return <div>商品详情页</div>;
};

const routes = [
  {
    path: '/shop',
    component: Shop,
    text: 'Shop',
  },
  {
    path: '/shop-item',
    component: ShopItem,
    text: 'ShopItem',
  }
];

const getHashPath = (path) => {
  return `#${path}`;
};

const Page = ({ route }) => {
  const routesMap = routes.reduce((res, route) => {
    const { path } = route;
    res[path] = route;
    return res;
  }, {});
  if (routesMap[route]) {
    const Route = routesMap[route].component;
    return <Route />;
  }
  return null;
};

const App = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const r = window.location.hash.substr(1);
      setRoute(r);
    });
  }, []);

  return (
    <div>
      <ul>
        {
          routes.map((route) => {
            const { path, text } = route;
            return (
              <li key={path}>
                <a href={getHashPath(path)}>{text}</a>
              </li>
            );
          })
        }
      </ul>
      <Page route={route} />
    </div>
  );
};

export default App;
