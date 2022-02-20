import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('produtos')
export class Product {
  @PrimaryGeneratedColumn()
  codigo_produto: number;

  @Column()
  nome: string;

  @Column()
  fabricacao: string;

  @Column()
  tamanho: string;

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
