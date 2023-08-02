import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
    })
        // @ts-ignore
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        // @ts-ignore
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        // @ts-ignore
    email: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        // @ts-ignore
    password: string;
}
