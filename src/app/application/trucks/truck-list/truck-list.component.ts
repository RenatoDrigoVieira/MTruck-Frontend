import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss'],
})
export class TruckListComponent implements OnInit {
  trucks = ['Caminhão A', 'Caminhão B', 'Caminhão C'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  newTruck() {
    this.router.navigate(['app', 'truck', 'new-truck']);
  }
}
