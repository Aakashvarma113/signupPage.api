import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async findOneByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ where: { email } });
    }

    async createUser(userData: Partial<User>): Promise<User> {
        return this.userModel.create(userData);
    }

}
