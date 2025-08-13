import { usePosts } from '@/hooks/use-posts';

// src/pages/Contact.tsx
export default function Contact() {
  const { data } = usePosts();
  console.log('Posts data:', data);
  return <h1>Contact Page</h1>;
}
