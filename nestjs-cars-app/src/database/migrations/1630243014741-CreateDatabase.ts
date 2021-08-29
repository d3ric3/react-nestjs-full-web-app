import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1630243014741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('yourcar', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('yourcar', true);
  }
}
