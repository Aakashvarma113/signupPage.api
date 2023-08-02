import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryState } from './country-state.model';
import { CountryStateController } from './country-state.controller';
import { CountryStateService } from './country-state.service';

@Module({
    imports: [SequelizeModule.forFeature([CountryState], 'countryStateDb')],
    controllers: [CountryStateController],
    providers: [CountryStateService],
})
export class CountryStateModule {}
