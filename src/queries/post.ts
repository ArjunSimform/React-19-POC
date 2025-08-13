// src/queries/posts.ts
import { queryOptions } from '@tanstack/react-query';

export type Post = {
  id: number;
  title: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
