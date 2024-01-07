import { ContestantModel } from 'models/contestant.model';
import { isMongoDuplicateKeyError } from 'utils/apiUtils';
import { v4 as uuidv4 } from 'uuid';
import { randomPickContestant } from './contestant';
import { getTotalDrawRecords } from './lotteryHistory';

const subscribeNextLottery = async (subscriberId: string) => {
  let ticket = '';
  let notInserted = true;

  const drawNumber = (await getTotalDrawRecords()) + 1;

  while (notInserted) {
    try {
      ticket = uuidv4();
      await ContestantModel.create({ userId: subscriberId, ticket, drawNumber });
      notInserted = false;
    } catch (error) {
      if (isMongoDuplicateKeyError(error)) {
        if (Object.keys(error.keyValue).some((item) => item === 'userId')) {
          throw new Error('Duplicate subscriber.');
        }
      } else {
        throw error;
      }
    }
  }

  return { ticket, drawNumber };
};

const getWinner = async () => {
  const targetDrawNumber = (await getTotalDrawRecords()) + 1;
  const winner = await randomPickContestant(targetDrawNumber);
  return winner[0];
};

export { subscribeNextLottery, getWinner };
