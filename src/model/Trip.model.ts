import mongoose,{ Schema, model } from 'mongoose';
import { ITRIP } from '../types/document/ITrip';
const ITRIPSchema = new Schema(
  {
    Tripname: { type: String },
    participant_No: { type: Number },
    busses :[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IBUSSSchema",
    }],
    TripDate: { type: Date },
    
  },
  { timestamps: true }
);
export const TRIPSchema = model<ITRIP>('ITRIPSchema', ITRIPSchema);