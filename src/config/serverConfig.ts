import { config } from 'dotenv';
import path from 'path';
import { parseNumberStringToInt } from 'utils';

const envFileName = '../../.env';
config({
  path: path.join(__dirname, envFileName),
});

const serverConfig = {
  port: parseNumberStringToInt(process.env.NODE_PORT, 3000),
};

const dbConfig = {
  uri: process.env.MONGODB_URI || '',
  dbName: process.env.MONGODB_DB || '',
  displayLog: process.env.MONGODB_SHOW_LOG === '1' || false,
};

const applicationConfig = {
  drawIntervalInSecond: process.env.DRAW_INTERVAL_SECONDS || '30',
};

export { serverConfig, dbConfig, applicationConfig };
