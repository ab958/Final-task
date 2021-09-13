export interface SaveReqBUSS{
  BussName: string;
  BussSeats: number;
  BussBokingDates:  {
    startingDate : string,
    endingDate : string
};
    
  }
  export interface UpdateReqBUSS {
    _id: string;
    BussName: string;
    BussSeats: number;
    BussBokingDates:  {
      startingDate : string,
      endingDate : string
  };
    
  }
  export interface GetBUSS {
    id: string
  }
  export interface DeleteBUSS {
    id: string
  }