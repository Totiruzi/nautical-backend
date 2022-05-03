import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export abstract class AbstractModel {
  @Field()
  readonly _id: string;
}