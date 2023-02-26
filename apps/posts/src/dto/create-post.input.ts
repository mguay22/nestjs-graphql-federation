import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;
}
