import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "src/common/abstract.model";

@ObjectType()
export class User extends AbstractModel {
  @Field()
  readonly email: string;
}