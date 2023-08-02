import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryStateService } from './country-state.service';
import { CountryState } from "./country-state.model";

@Controller('country-state')
export class CountryStateController {
    constructor(private countryStateService: CountryStateService) {}

    @Get()
    async getAllCountryStates(): Promise<CountryState[]> {
        return this.countryStateService.findAll();
    }

    @Post()
    async createCountryState(@Body() data: any) {
        const newCountryState = await this.countryStateService.createCountryState(data);
        return newCountryState;
    }
}
