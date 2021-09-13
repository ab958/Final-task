import { Document } from 'mongoose';
export interface ITRIP extends Document {
  _id:string;
  Tripname: string;
  participant_No: number;
  busses : Array<string>;
  CreatedAt?: string;
  UpdatedAt?: string;
}
