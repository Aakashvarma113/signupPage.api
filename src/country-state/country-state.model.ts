import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table
export class CountryState extends Model {
    @Column
        // @ts-ignore
    country: string;

    @Column
        // @ts-ignore
    state: string;


    @ForeignKey(() => User)
    @Column
        // @ts-ignore
    userId: number;

    @BelongsTo(() => User)
        // @ts-ignore
    user: User;
}
