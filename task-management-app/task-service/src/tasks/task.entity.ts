import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  status: string;
}