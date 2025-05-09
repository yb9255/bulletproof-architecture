import ky from 'ky';
import { API_URL } from '@/config/env';
import type {
  GetRequest,
  PostRequest,
  PutRequest,
  PatchRequest,
  DeleteRequest,
} from '@/types/api';

const api = ky.create({
  prefixUrl: API_URL,
});

export const http = {
  get: <T>({ path, options }: GetRequest) => api.get(path, options).json<T>(),
  post: <T>({ path, body, options }: PostRequest) =>
    api.post(path, { json: body, ...options }).json<T>(),
  put: <T>({ path, body, options }: PutRequest) =>
    api.put(path, { json: body, ...options }).json<T>(),
  patch: <T>({ path, body, options }: PatchRequest) =>
    api.patch(path, { json: body, ...options }).json<T>(),
  delete: <T>({ path, options }: DeleteRequest) =>
    api.delete(path, options).json<T>(),
} as const;
