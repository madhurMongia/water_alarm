import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { webSocket } from 'rxjs/webSocket';
import { TankService } from 'src/app/services/tank.service';

@Component({
  selector: 'app-tank-card',
  templateUrl: './tank-card.component.html',
  styleUrls: ['./tank-card.component.scss']
})
export class TankCardComponent implements OnInit,OnDestroy {
  subject = webSocket('ws://157.245.104.248:8000/ws/current_level/1/');
  current_level: any;
  levels: any[] = [];
  constructor(
    private API : APIService,
    private tankService : TankService
  ) { }

  @Input() tank : any;
  ngOnInit(): void {
    this.API.API(`api/tank/${this.tank.id}/`, 'GET').subscribe({
      next: (data: any) => {
        this.levels = data.levels;
      }})
    this.subject.subscribe({
      next: (data: any) => {
        if(Number.isInteger(Number(data.message)))
          this.current_level = data.message;
      },
      error: console.error
    })
  }
   showHistory(id: number) {
    console.log(this.levels)
    this.tankService.setTank(this.levels);
  }

  toggleActive(tank:any) {
    this.API.API(`api/tank/${tank.id}/`, 'PATCH' , {'is_active' : !tank?.is_active}).subscribe({
      next: (data: any) => {
        tank.is_active = !tank.is_active;
      }
    })
  }
  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}
