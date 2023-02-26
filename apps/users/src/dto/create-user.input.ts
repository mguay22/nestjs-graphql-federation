import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
