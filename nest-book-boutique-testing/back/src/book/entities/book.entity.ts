import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  public id: string;
  @Column()
  public name: string;
  @Column()
  public author: string;
  @Column()
  public pages: number;
  @Column()
  public genre: string;
  @CreateDateColumn()
  public createdAt: string;
}
