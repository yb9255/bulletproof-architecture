import { http } from '@/lib/api-client';
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import type { PostComment } from '@/types/api';

export const usePostComments = ({
  id,
  options,
}: {
  id: number;
  options?: UseSuspenseQueryOptions<PostComment[]>;
}) =>
  useSuspenseQuery<PostComment[]>({
    queryKey: ['posts', id, 'comments'],
    queryFn: () => http.get<PostComment[]>({ path: `posts/${id}/comments` }),
    ...options,
  });
