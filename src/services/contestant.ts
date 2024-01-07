import { ContestantModel } from 'models/contestant.model';

const randomPickContestant = async (targetDrawNumber: number) => {
  return await ContestantModel.aggregate([{ $match: { drawNumber: targetDrawNumber } }, { $sample: { size: 1 } }]);
};

const cleanAllContestants = async (drawNumber: number) => {
  await ContestantModel.deleteMany({ drawNumber });
};

export { randomPickContestant, cleanAllContestants };
