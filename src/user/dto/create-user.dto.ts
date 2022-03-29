import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserDto {
    @IsNotEmpty()
    @Field({ nullable: true })
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}
