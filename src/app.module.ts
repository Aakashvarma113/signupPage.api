import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from "./user/user.model";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { UserRepository } from "./user/user.repository";
import { CountryStateController } from './country-state/country-state.controller';
import { CountryState } from "./country-state/country-state.model";
import { CountryStateModule } from "./country-state/country-state.module";
import { CountryStateService } from "./country-state/country-state.service";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'signup',
            autoLoadModels: true,
            synchronize: true,
            models: [User],
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'country-states',
            autoLoadModels: true,
            synchronize: true,
            models: [ CountryState],
        }),
        SequelizeModule.forFeature([User]),
        SequelizeModule.forFeature([CountryState]),
        // CountryStateModule
    ],
    controllers: [UserController, CountryStateController],
    providers: [UserService, UserRepository,CountryStateService],
    exports: [UserRepository],
})
export class AppModule {}
