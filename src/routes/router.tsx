// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { postsLoader } from './postsLoader';
import Home from '@/pages/Home';
import { Suspense } from 'react';
import Posts from '@/pages/Posts';
import Home1 from '@/pages/Home1';
import Home2 from '@/pages/Home2';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home1', element: <Home1 /> },
      { path: 'home2', element: <Home2 /> },
      {
        path: 'posts',
        loader: postsLoader,
        element: (
          <Suspense fallback={<p>Loading posts...</p>}>
            <Posts />
          </Suspense>
        ),
      },
    ],
  },
]);
