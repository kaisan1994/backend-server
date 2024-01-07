import { dbConfig } from 'config/serverConfig';
import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.set('debug', dbConfig.displayLog);
  await mongoose.connect(dbConfig.uri, {
    dbName: dbConfig.dbName,
  });
  console.log(`${mongoose.connection.name} is connected`);
};

export { connectDB };
