// src/App.tsx
import { QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/sonner';
import AppRouter from './router';
import { queryClient } from './queryClient';

// const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="top-right" />
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  );
}
