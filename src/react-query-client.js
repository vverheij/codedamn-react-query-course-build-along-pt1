import { QueryClient } from 'react-query';

const qclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // won't refresh data, no Loading...
      cacheTime: 300 * 1000
    }
  }
})

export default qclient