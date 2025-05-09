import Post from '@/features/posts/components/Post';
import { cn } from '@/lib/cn';
import { useParams } from 'react-router';

const PostRoute = () => {
  const { postId } = useParams();

  return (
    <>
      <header className={cn('w-full', 'px-12', 'mb-12')}>
        <h1 className={cn('text-2xl', 'font-bold')}>{postId}번째 게시글</h1>
      </header>
      <Post postId={Number(postId)} />
    </>
  );
};

export default PostRoute;
