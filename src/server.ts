import bodyParser from 'body-parser';
import { serverConfig } from 'config/serverConfig';
import { connectDB } from 'database';
import express, { Request, Response, NextFunction } from 'express';
import routers from 'routes';
import { drawTask } from './scheduler';

connectDB();

const app = express();
app.use(
  bodyParser.json({
    type: ['application/json', 'application/*+json'],
  })
);

app.use(routers);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(serverConfig.port, () => {
  drawTask.start();
  console.log(`Application is listening port ${serverConfig.port}`);
});
