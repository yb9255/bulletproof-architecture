import { Link } from 'react-router';
import { ROUTE_CONSTANTS } from '@/config/path';

const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={ROUTE_CONSTANTS.home.root} replace>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundRoute;
