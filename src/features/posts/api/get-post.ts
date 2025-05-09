import { http } from '@/lib/api-client';
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import type { Post } from '@/types/api';

export const usePost = ({
  id,
  options,
}: {
  id: number;
  options?: UseSuspenseQueryOptions<Post>;
}) =>
  useSuspenseQuery<Post>({
    queryKey: ['posts', id],
    queryFn: () => http.get<Post>({ path: `posts/${id}` }),
    ...options,
  });
