import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { QueryClient, QueryClientProvider } from 'react-query'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import qclient from './react-query-client'

// const client = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={qclient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);


