import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FoodsProvider } from './context/FoodsContext';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FoodsProvider>
        <App />
      </FoodsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
