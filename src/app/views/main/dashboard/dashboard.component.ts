import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private API: APIService
  ) { }
  tanks : any[] = [];
  current_levels : any[] = [];
  ngOnInit(): void {
    this.API.API('api/tank/', 'GET').subscribe({
      next: (data: any) => {
        console.log(data)
        this.tanks = data;
      }
    })
  }

  getCurrentLevel(tank: any) {
    this.API.API(`api/tank/${tank.id}/`, 'GET').subscribe({
      next: (data: any) => {
        tank.current_levels[tank.id] = data.levels[0].level
      }
    })
  }
}
