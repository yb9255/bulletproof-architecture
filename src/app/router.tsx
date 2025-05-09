import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTE_CONSTANTS } from '@/config/path';
import AppRoot from './routes/app/root';
import PostsRoute from './routes/app/posts/posts';
import UsersRoute from './routes/app/users/users';

const router = createBrowserRouter([
  {
    path: ROUTE_CONSTANTS.home.root,
    element: <AppRoot />,
    children: [
      {
        path: ROUTE_CONSTANTS.posts.root,
        children: [
          {
            index: true,
            element: <PostsRoute />,
          },
          {
            path: ':postId',
            element: <div>Post</div>,
          },
        ],
      },
      {
        path: ROUTE_CONSTANTS.users.root,
        children: [
          {
            index: true,
            element: <UsersRoute />,
          },
          {
            path: ':userId',
            element: <div>User</div>,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
