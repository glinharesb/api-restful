import { createConnection } from 'typeorm';
import path from 'path';
import { existsSync } from 'fs';

export async function connectToDatabase() {
  try {
    // connect using .env variables
    await createConnection();

    console.log('~> The database started successfully');
    return true;
  } catch (error) {
    console.log(`~> Error: ${error.message}`);

    try {
      console.log('~> Trying to connect with sqlite...');

      await createConnection({
        type: 'sqlite',
        database: path.join(__dirname, 'db.sqlite3'),
        migrations: [path.join(__dirname, 'migrations', '*.ts')],
        entities: [path.join(__dirname, '..', 'entities', '*.ts')],
        migrationsRun: !existsSync(path.join(__dirname, 'db.sqlite3')),
      });

      console.log('~> Successfully :)');
      return true;
    } catch (error) {
      console.log(`~> Failed again, error: ${error.message}`);
    }
  }

  return false;
}
