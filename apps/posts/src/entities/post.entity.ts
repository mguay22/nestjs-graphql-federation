import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;

  @Field(() => User)
  user?: User;
}
