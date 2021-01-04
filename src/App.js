import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          {
            routes.map((route) => {
              const { path, text } = route;
              return (
                <li key={path}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })
          }
        </ul>
        <Switch>
          {
            routes.map((route) => {
              const { path, component } = route;
              return <Route key={path} path={path} component={component} exact />;
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
