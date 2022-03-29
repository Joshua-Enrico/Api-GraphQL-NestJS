import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { CreateUserDto } from './dto/create.user.dto';
import { DeleteUserDto } from './dto/delete.user.dto';
import { LoginDto } from './dto/login.user.dto';
import { User, UserCreate, UserDeleteType } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService) {}

    @Query(() => [User])
    async user() {
        return await this.userService.getMany();
    }

    @Query(() => User)
    async findUser(@Args('id') id: string,) {
        return await this.userService.get(id)
    }

    @Mutation(() => UserCreate)
    async createUser(@Args({ name : 'input', type: () => CreateUserDto } ) data: CreateUserDto) {
        return await this.userService.create(data);
    }

    @Mutation(() => UserDeleteType)
    @UseGuards(AuthGuard)
    async deleteUser(@Args({ name : 'input', type: () => DeleteUserDto } ) data: DeleteUserDto) {

        return await this.userService.delete(data);

    }

    @Query(() => User)
    async login(@Args({ name: 'input', type : () => LoginDto }) data: LoginDto ) {

        return await this.userService.login(data);


    }

}
