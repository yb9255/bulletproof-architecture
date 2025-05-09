import { cn } from '@/lib/cn';
import PostList from '@/features/posts/components/PostList';
import CreatePostModal from '@/features/posts/components/CreatePostModal';
const PostsRoute = () => {
  return (
    <>
      <header
        className={cn('w-screen', 'px-12', 'mb-12', 'flex', 'justify-between')}
      >
        <h1 className={cn('text-2xl', 'font-bold')}>Posts</h1>
        <CreatePostModal />
      </header>
      <PostList />
    </>
  );
};

export default PostsRoute;
