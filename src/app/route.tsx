import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE_CONSTANTS } from '@/config/path';

const router = createBrowserRouter([
  {
    path: ROUTE_CONSTANTS.home.root,
    element: (
      <div>
        Home
        <Outlet />
      </div>
    ),
    children: [
      {
        path: ROUTE_CONSTANTS.posts.root,
        children: [
          {
            index: true,
            element: <div>Posts</div>,
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
            element: <div>Users</div>,
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
