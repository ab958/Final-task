import express from 'express';
import { TripController } from '../controller/Trip.controller';
// import { IBUSS } from '../types/document/IBuss';
import { SaveReqTrip,GetTrip } from '../types/Request/Trip.request';
import { SaveUpdateResTRIP } from '../types/Responce/Trip.responce';
import {buss_reccomand} from "../middleware/buss_recommand"
// import CustomeError from '../utills/error';

export class TripRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
   
    
    this.router.post('/savetrip', buss_reccomand, async (req, res, next) => {
      try {
        let buss: SaveReqTrip = {
        
            Tripname: req.body.Tripname,
            participant_No: req.body.participant_No,
            busses : res.locals.buss
       
        
       
        }
        
        const new_buss:SaveUpdateResTRIP = await new TripController().saveTrip(buss);
        res.status(200).json({
          message:new_buss
        });
      } catch (error) {
        next(error);
      }
    });
   
  }
}
export const TripRoutesApi = new TripRoutes().router;