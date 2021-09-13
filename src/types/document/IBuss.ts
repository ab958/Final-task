import { Document } from 'mongoose';

export interface IBUSS extends Document {
  _id:string;
  BussName: string;
  BussSeats: number;
  BussBokingDates: {
    startingDate : string,
    endingDate : string
  };
  CreatedAt?: string;
  UpdatedAt?: string;
}