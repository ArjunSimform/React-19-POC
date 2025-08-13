import { useAuth } from '@/context/AuthContext';
import { usePosts } from '@/hooks/use-posts';
import { postsQueryOptions } from '@/queries/post';
import { useSuspenseQuery } from '@tanstack/react-query';

// src/pages/About.tsx
export default function About() {
  const { isAuthenticated } = useAuth();
  const { data: posts } = useSuspenseQuery(postsQueryOptions());
  console.log('Posts data: in About page', posts);

  // Queries
  const { data } = usePosts();

  console.log('isAuthenticated:', isAuthenticated);
  if (!isAuthenticated) {
    return <h1>Please log in to view this page.</h1>;
  }
  return (
    <div>
      <ul>
        {data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <h1>About Page</h1>
      <p>This is a simple about page.</p>
    </div>
  );
}
