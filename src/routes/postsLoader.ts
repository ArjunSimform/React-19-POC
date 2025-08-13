// src/routes/postsLoader.ts

import { postsQueryOptions } from '@/queries/post';
import { queryClient } from '@/queryClient';

export async function postsLoader() {
  // Ye cache me data daal dega agar nahi hai
  await queryClient.ensureQueryData(postsQueryOptions());
  return null; // Loader se data nahi bhejte, cache se milega component ko
}
// This loader is used to prefetch posts data before rendering components that need it
// It uses the queryClient to ensure that the posts data is available in the cache
// so that components can access it without needing to refetch. This improves performance
// and user experience by reducing loading times for components that depend on posts data.
// The loader does not return any data directly; it relies on the queryClient to manage the cache.
// Components can then use the usePosts hook to access the posts data from the cache.
// This is particularly useful for pages that require posts data, such as the About page or Contact page,
// ensuring that the data is ready when those components are rendered.
