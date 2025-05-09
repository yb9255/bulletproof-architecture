import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { http } from '@/lib/api-client';
import type { CreatePostBody } from '@/types/api';

export const useCreatePostMutation = (
  options?: UseMutationOptions<CreatePostBody, Error, CreatePostBody>
) =>
  useMutation({
    mutationFn: (body: CreatePostBody) =>
      http.post<CreatePostBody>({ path: 'posts', body }),
    ...options,
  });
