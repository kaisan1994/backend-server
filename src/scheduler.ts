import { applicationConfig } from 'config/serverConfig';
import { drawWinner } from 'controllers/lottery';
import cron from 'node-cron';

const drawTask = cron.schedule(`*/${applicationConfig.drawIntervalInSecond} * * * * *`, async () =>
  drawWinner().catch((error) => console.error(error))
);

export { drawTask };
