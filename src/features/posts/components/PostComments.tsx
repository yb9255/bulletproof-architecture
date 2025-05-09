import { usePostComments } from '@/features/posts/api/get-post-comments';
import { cn } from '@/lib/cn';

const PostComments = ({ postId }: { postId: number }) => {
  const { data: comments } = usePostComments({ id: postId });

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className={cn('p-4', 'border-b')}>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <div>{comment.name.slice(0, 6)}</div>
          </div>

          <div>{comment.body}</div>
        </li>
      ))}
    </ul>
  );
};
export default PostComments;
