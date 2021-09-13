import jwt from "jsonwebtoken";
import { BUSSSchema } from '../model/Buss.model';

export async function  buss_reccomand(req:any,res:any,next:any) {
    
//    console.log(req.body)
   try{
        const participant_No = req.body.participant_No;
        // console.log(participant_No)
        const allBusesSeat:any[] = await BUSSSchema.find().select('BussSeats')
        const buses: any[]=[]
        let totalSeats:any = 0
       console.log(allBusesSeat)
        for(let i=0;i<allBusesSeat.length;i++){
            // console.log("wahab")
            console.log(allBusesSeat[i].BussSeats)
            if(totalSeats < participant_No ){
                totalSeats = totalSeats + allBusesSeat[i].BussSeats
                buses.push(allBusesSeat[i]._id)
            }
            
            // req.busses = buses
           
res.locals.buss = buses
            

        }
        
        next()
   }catch(e){
       next(e)
   }
  }