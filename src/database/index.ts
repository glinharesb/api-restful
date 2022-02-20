import { createConnection } from 'typeorm';

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

      // connect using sqlite
      await createConnection({
        type: 'sqlite',
        database: './src/database/db.sqlite3',
        migrationsRun: true,
        migrations: ['./src/database/migrations/*.ts'],
        entities: ['./src/entities/*.ts'],
      });

      console.log('~> Successfully :)');
      return true;
    } catch (error) {
      console.log(`~> Failed again, error: ${error.message}`);
    }
  }

  return false;
}
