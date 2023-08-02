import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserRepository } from './user.repository'; // Import the UserRepository

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private userRepository: UserRepository,
    ) {}

    @Post()
    async createUser(@Body() data: Partial<User>): Promise<User> {
        return this.userService.createUser(data);
    }

    @Post('login')
    async loginUser(@Body() data: { email: string; password: string }): Promise<User | null> {
        const { email, password } = data;
        return this.userService.loginUser(email, password);
    }
}
