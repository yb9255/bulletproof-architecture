import type { Options } from 'ky';

export type GetRequest = {
  path: string;
  options?: Options;
};

export type PostRequest = {
  path: string;
  body: unknown;
  options?: Options;
};

export type PutRequest = {
  path: string;
  body: unknown;
  options?: Options;
};

export type PatchRequest = {
  path: string;
  body: unknown;
  options?: Options;
};

export type DeleteRequest = {
  path: string;
  options?: Options;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
