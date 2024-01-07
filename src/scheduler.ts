import { applicationConfig } from 'config/serverConfig';
import cron from 'node-cron';

const drawTask = cron.schedule(`${applicationConfig.drawIntervalInSecond} * * * * *`, () => {
  try {
    console.log(`cron job runs every ${applicationConfig.drawIntervalInSecond} seconds`);
  } catch (error) {
    console.error(error)
  }
});

export { drawTask };
