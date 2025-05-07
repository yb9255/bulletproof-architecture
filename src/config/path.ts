export const ROUTE_CONSTANTS = {
  home: {
    root: '/',
  },
  posts: {
    root: '/posts',
    getPostById: (id: string | number) => `/posts/${id}`,
  },
  users: {
    root: '/users',
    getUserById: (id: string | number) => `/users/${id}`,
  },
} as const;
