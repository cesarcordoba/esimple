

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'contratistas'
})
export class Contratista extends Model<Contratista> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    constructor(values?: any, options?: any) {
        super(values, options);
    }
}