import { cn } from '@/lib/cn';
import { PostCard } from './PostCard';
import { usePosts } from '../api/get-posts';

const PostList = () => {
  const { data } = usePosts();

  return (
    <section className={cn('w-screen', 'px-12', 'mb-12')}>
      <div className={cn('w-screen', 'grid', 'grid-cols-4', 'gap-12')}>
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
