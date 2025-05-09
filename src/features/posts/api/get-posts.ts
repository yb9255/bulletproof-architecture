import { http } from '@/lib/api-client';
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import type { Post } from '@/types/api';

export const usePosts = ({
  options,
}: {
  options?: UseSuspenseQueryOptions<Post[]>;
} = {}) =>
  useSuspenseQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => http.get<Post[]>({ path: 'posts' }),
    ...options,
  });
