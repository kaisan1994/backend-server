import { Schema, models, model } from 'mongoose';

const contestantSchema = new Schema({
  userId: { type: String, require: true },
  ticket: { type: String, require: true },
  drawNumber: { type: Number, require: true },
});

contestantSchema.index({ userId: 1, drawNumber: 1 }, { unique: true });
contestantSchema.index({ ticket: 1, drawNumber: 1 }, { unique: true });

const ContestantModel = models.Contestant || model('Contestant', contestantSchema);

export { ContestantModel };
