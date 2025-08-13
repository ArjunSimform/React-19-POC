// import { postsQueryOptions } from '@/queries/post';
// import { useSuspenseQuery } from '@tanstack/react-query';

// // src/pages/Home.tsx
// export default function Home() {
//   const { data: posts } = useSuspenseQuery(postsQueryOptions());
//   console.log('Posts data in Home page:', posts);
//   return (
//     <div>
//       <h2>Posts List</h2>
//       <ul>
//         {posts?.map(p => (
//           <li key={p.id}>{p.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function Home() {
  return (
    <h1 className="text-2xl font-semibold">Welcome to React 19 Task Board</h1>
  );
}
