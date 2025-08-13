import React, { useState, startTransition } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

export default function Login() {
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [isPending] = React.useTransition();

  const handleLogin = () => {
    startTransition(() => {
      auth.login(username);
      toast('Logged in successfully!');
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        className="border rounded p-2 w-full mb-4"
        type="text"
        aria-label="username"
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button
        className="btn btn-primary w-full"
        onClick={handleLogin}
        disabled={isPending || !username.trim()}
        type="button"
      >
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}
