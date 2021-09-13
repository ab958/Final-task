export interface SaveUpdateResBUSS {
    _id:string;
    BussName: string;
    BussSeats: number;
    BussBokingDates:  {
      startingDate : string,
      endingDate : string
  };
    createdAt?: string;
    updatedAt?: string;
  }