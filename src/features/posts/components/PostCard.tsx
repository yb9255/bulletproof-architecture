import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Post } from '@/types/api';
import { cn } from '@/lib/cn';
import { Link } from 'react-router';
import { ROUTE_CONSTANTS } from '@/config/path';

export function PostCard({ post }: { post: Post }) {
  const { id, title, body } = post;

  return (
    <Link to={ROUTE_CONSTANTS.posts.getPostById(id)}>
      <Card className={cn('cursor-pointer', 'w-[25rem]', 'h-[14rem]')}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{body}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
