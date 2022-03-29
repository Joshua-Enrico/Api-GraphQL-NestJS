import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserCreate } from './models/user.model';
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
}
