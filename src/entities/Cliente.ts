import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  codigo_cliente: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    // if (!this.codigo_cliente) {
    //   this.codigo_cliente = 1;
    // }
  }
}
