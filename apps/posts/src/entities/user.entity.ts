import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Post])
  posts?: Post[];
}
