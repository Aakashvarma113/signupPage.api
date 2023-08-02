import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async createUser(data: Partial<User>): Promise<User> {
        return this.userModel.create(data); // Use the create method from the User model
    }


    async loginUser(email: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ where: { email } });

        if (!user || user.password !== password) {
            return null;
        }

        return user;
    }
}
