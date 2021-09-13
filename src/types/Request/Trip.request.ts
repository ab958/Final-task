export interface SaveReqTrip{
    Tripname: string;
    participant_No: number;
    busses : Array<string>
    

}

export interface GetTrip {
    id: string
  }