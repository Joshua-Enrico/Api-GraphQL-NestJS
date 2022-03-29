import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteUserDto {
    @IsNotEmpty()
    @Field({ nullable: true })
    id: string;
}
