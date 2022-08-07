import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TankService {
  tank = new BehaviorSubject<any>({});
  constructor() { }

  getTank() {
    return this.tank.asObservable();
  }

  setTank(tank:any) {
    this.tank.next(tank);
  }
}
