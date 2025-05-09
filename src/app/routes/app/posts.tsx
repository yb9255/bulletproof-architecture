import { cn } from '@/lib/cn';
import PostList from '@/features/posts/components/PostList';

const PostsRoute = () => {
  return (
    <>
      <header
        className={cn('w-screen', 'px-12', 'mb-12', 'flex', 'justify-between')}
      >
        <h1 className={cn('text-2xl', 'font-bold')}>Posts</h1>
      </header>
      <PostList />
    </>
  );
};

export default PostsRoute;
