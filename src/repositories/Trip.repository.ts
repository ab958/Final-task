import { TRIPSchema } from '../model/Trip.model';
import { ITRIP } from '../types/document/ITrip';
export class MainTrip {
  constructor() {}
  gettrip(_id: string) {
    return TRIPSchema.findById(_id);
  }
  saveTrip(newTrip: ITRIP) {
    return new TRIPSchema(newTrip).save();
  }
//   updateBuss(updateBuss: IBUSS) {
//     return TRIPSchema.findByIdAndUpdate(updateBuss._id, updateBuss, {
//       new: true
//     });
//   }
//   deleteBuss(_id: string) {
//     return BUSSSchema.findByIdAndDelete(_id);
//   }
  
}