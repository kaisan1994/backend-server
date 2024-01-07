import { Schema, models, model } from 'mongoose';

const lotteryHistorySchema = new Schema({
  ticket: { type: String, require: true },
  drawNumber: { type: Number, unique: true, index: 'desc', require: true },
  drawTime: { type: Date, require: true },
});

const LotteryHistoryModel = models.LotteryHistory || model('LotteryHistory', lotteryHistorySchema);

export { LotteryHistoryModel };
