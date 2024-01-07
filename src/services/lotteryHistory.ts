import { LotteryHistoryModel } from 'models/lotteryHistory.model';

const getHistoryRecordOfDrawNumber = async (drawNumber: number) => {
  return await LotteryHistoryModel.findOne({
    drawNumber,
  });
};

const getLatestLotteryRecord = async () => {
  return await LotteryHistoryModel.findOne().sort({ drawNumber: -1 }).limit(1);
};

const getHistoryRecord = async (drawNumber: number = -1) => {
  if (drawNumber > 0) return await getHistoryRecordOfDrawNumber(drawNumber);
  return await getLatestLotteryRecord();
};

const getTotalDrawRecords = async () => {
  return await LotteryHistoryModel.countDocuments();
};

const saveLotteryRecord = async (ticket: string) => {
  const totalRecords = await getTotalDrawRecords();
  const now = new Date();
  return await LotteryHistoryModel.create({ ticket, drawNumber: totalRecords + 1, drawTime: now });
};

export { saveLotteryRecord, getHistoryRecord, getTotalDrawRecords };
