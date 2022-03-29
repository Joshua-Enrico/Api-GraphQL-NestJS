import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserDto {
    @IsNotEmpty()
    @Field({ nullable: true })
    name: string;   

    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}
