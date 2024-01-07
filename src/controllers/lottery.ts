import { Request, Response } from 'express';
import { cleanAllContestants } from 'services/contestant';
import { getWinner, subscribeNextLottery } from 'services/lottery';
import { getHistoryRecord, saveLotteryRecord } from 'services/lotteryHistory';
import { parseNumberStringToInt } from 'utils';

const subscribeLottery = async (req: Request) => {
  if (!req.body?.id) throw new Error('Invalid Identity.');

  const {
    body: { id },
  } = req;

  return await subscribeNextLottery(id);
};

const drawWinner = async () => {
  // draw winner ticket
  const winner = await getWinner();

  if (!winner) throw new Error('No contestant for this lottery.');

  // clean contestant so that contestant can join next draw.
  cleanAllContestants(winner.drawNumber);

  // save history into db so that we can check history records.
  saveLotteryRecord(winner.ticket);

  return winner.ticket;
};

const getHistoryDraw = async (req: Request) => {
  const drawNumber = parseNumberStringToInt(req.params.id, -1);
  const result = await getHistoryRecord(drawNumber);

  if (!result) {
    throw new Error('No history record.');
  }

  return result.ticket;
};

export { subscribeLottery, drawWinner, getHistoryDraw };
