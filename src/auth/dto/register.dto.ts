import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
