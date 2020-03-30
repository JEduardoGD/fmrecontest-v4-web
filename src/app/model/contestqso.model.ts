import { DxccEntityModel } from './dxccentity.model';

export class Contestqso {
   id: number;
   conteoId: number;
   frequency: number;
   callsignE: string;
   callsignR: string;
   dateTime: string;
   exchangeE: string;
   exchangeR: string;
   rstE: string;
   rstR: string;
   dxccEntityId: number;
   dxccEntity: string;
   points: number;
   multiply: number;
   qsoBand: string;
   qsoBandId: number;
}
