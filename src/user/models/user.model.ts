import { Field, ID, ObjectType } from "@nestjs/graphql";

/**
 * User model
 */
@ObjectType()
export class UserCreate {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    createdAt?: Date;
    
    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class User {
    @Field(() => ID, { nullable: true })
    id?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    createdAt?: Date;
    
    @Field({ nullable: true })
    updatedAt?: Date;
}
