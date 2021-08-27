import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Gauntlet {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column('text')
    name!: string;

    @Column('text')
    description!: string;

    @Column('text')
    rank!: string;

    @Column('text')
    date!: string;

    @Column('text')
    uuid!: string;
    
    @Column('boolean')
    deleted!: boolean
}
