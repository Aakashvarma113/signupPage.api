import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CountryState } from './country-state.model';

@Injectable()
export class CountryStateService {
    constructor(@InjectModel(CountryState, 'countryStateDb') private countryStateModel: typeof CountryState) {}

    async findAll(): Promise<CountryState[]> {
        return this.countryStateModel.findAll();
    }

    async createCountryState(data: any): Promise<CountryState> {
        return this.countryStateModel.create(data);
    }
}
