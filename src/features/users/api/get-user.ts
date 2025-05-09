import { http } from '@/lib/api-client';
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import type { User } from '@/types/api';

export const useUser = ({
  id,
  options,
}: {
  id: number;
  options?: UseSuspenseQueryOptions<User>;
}) =>
  useSuspenseQuery<User>({
    queryKey: ['users', id],
    queryFn: () => http.get<User>({ path: `users/${id}` }),
    ...options,
  });
