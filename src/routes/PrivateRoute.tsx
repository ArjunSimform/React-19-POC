// 2. PrivateRoute.tsx (Route guard)

import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const auth = useAuth();
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
