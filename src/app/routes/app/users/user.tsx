import User from '@/features/users/components/User';
import { useParams } from 'react-router';

const UserRoute = () => {
  const { userId } = useParams<{ userId: string }>();

  return <User userId={userId ?? ''} />;
};

export default UserRoute;
