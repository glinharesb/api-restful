/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1645398414686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            name: 'codigo_produto',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'fabricacao',
            type: 'varchar',
          },
          {
            name: 'tamanho',
            type: 'varchar',
          },
          {
            name: 'valor',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
