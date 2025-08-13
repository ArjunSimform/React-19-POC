// src/pages/Posts.tsx
import { postsQueryOptions } from '@/queries/post';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Posts() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions());
  console.log('Posts data:', posts);
  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts?.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
