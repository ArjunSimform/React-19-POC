import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './routes/Layout';
import { queryClient } from './queryClient';
import { tasksQueryOptions } from './api/tasks';

// Loader prefetch tasks cache for dashboard route
async function dashboardLoader() {
  await queryClient.ensureQueryData(tasksQueryOptions());
  return null;
}

function PrivateRoute() {
  const auth = useAuth();
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
            loader: dashboardLoader, // prefetch tasks cache
          },
        ],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
