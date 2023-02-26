import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
