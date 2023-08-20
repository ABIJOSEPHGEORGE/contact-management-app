import './App.css';
import { AppRoutes } from './components/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes/>
    </QueryClientProvider>
  );
}

export default App;
