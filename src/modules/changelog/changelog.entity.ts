import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChangelogEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    version: string;
}