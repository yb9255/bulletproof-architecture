import { cn } from '@/lib/cn';
import PostUserInfo from './PostUserInfo';
import PostComments from './PostComments';
import { usePost } from '../api/get-post';

const Post = ({ postId }: { postId: number }) => {
  const { data } = usePost({ id: postId });

  return (
    <>
      <section className={cn('w-full', 'h-full', 'p-12')}>
        <h2 className={cn('text-3xl', 'font-bold', 'mb-5')}>{data.title}</h2>
        <PostUserInfo userId={data.userId} />

        <p className={cn('text-sm', 'text-gray-500', 'mt-10')}>{data.body}</p>
      </section>
      <section className={cn('w-full', 'h-full', 'p-12')}>
        <h3 className={cn('text-2xl', 'font-bold', 'mb-5')}>댓글</h3>
        <PostComments postId={Number(postId)} />
      </section>
    </>
  );
};

export default Post;
