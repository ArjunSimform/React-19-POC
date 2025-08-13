import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout, isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <nav className="flex justify-between items-center mb-6">
        <div>
          <Link to="/" className="font-bold text-xl">
            TaskBoard
          </Link>
          {' | '}
          <Link to="/dashboard" className="ml-2">
            Dashboard
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <span className="mr-4">Hello, {user}</span>
              <button
                className="btn btn-sm btn-red"
                onClick={() => logout()}
                type="button"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
