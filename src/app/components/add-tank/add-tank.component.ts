import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tank',
  templateUrl: './add-tank.component.html',
  styleUrls: ['./add-tank.component.scss']
})
export class AddTankComponent implements OnInit {

  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleShow() {
    this.show = !this.show;
    if(this.show)
    document.body.style.overflow = 'hidden';
    else
    document.body.style.overflow = 'auto';
  }
}
