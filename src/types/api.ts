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

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
