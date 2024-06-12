import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  name: string;
}
