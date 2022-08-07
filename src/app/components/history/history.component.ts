import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { TankService } from 'src/app/services/tank.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    private API : APIService,
    private tankService : TankService
  ) { }

  layout = {
    title: 'Water Level History',
    xaxis: {
      title: 'Time',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Water Level',
      showline: false,
    },
    width : 900,
    height : 500
  }
  data = [
    {
      x: [0],
      y: [0],
      type: 'scatter',
      mode: 'lines+points',
      marker: {color: 'red'}
    }
  ]
  ngOnInit(): void {
    this.tankService.getTank().subscribe({
      next: (data: any) => {
        this.generateData(data);
      }
    })
  }
  generateData(data: any) {
    this.data = [
      {
        x: [],
        y: [],
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'purple'}
      }
    ]
    data.forEach((level:any) => {
      this.data[0].x.push(level.created_at);
      this.data[0].y.push(level.level);
    }
    )
  }

}
