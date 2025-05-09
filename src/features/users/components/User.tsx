import { useUser } from '@/features/users/api/get-user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const User = ({ userId }: { userId: string }) => {
  const { data: user } = useUser({
    id: Number(userId),
  });

  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>유저 {user.name}</h1>
    </>
  );
};

export default User;
