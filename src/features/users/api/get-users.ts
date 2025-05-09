import { http } from '@/lib/api-client';
import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import type { User } from '@/types/api';

export const useUsers = ({
  options,
}: {
  options?: UseSuspenseQueryOptions<User[]>;
} = {}) =>
  useSuspenseQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => http.get<User[]>({ path: 'users' }),
    ...options,
  });
