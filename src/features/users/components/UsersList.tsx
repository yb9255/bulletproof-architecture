import { useUsers } from '@/features/users/api/get-users';
import { ROUTE_CONSTANTS } from '@/config/path';
import { Link } from 'react-router';
import UserListItem from './UserListItem';

const UsersList = () => {
  const { data: users } = useUsers();

  return (
    <>
      <main>
        <ul>
          {users.map((user) => (
            <Link to={ROUTE_CONSTANTS.users.getUserById(user.id)}>
              <UserListItem user={user} />
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default UsersList;
