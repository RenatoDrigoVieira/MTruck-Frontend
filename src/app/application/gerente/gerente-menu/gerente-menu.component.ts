import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-gerente-menu',
  templateUrl: './gerente-menu.component.html',
  styleUrls: ['./gerente-menu.component.scss'],
})
export class GerenteMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToUsers() {
    this.router.navigate(['app', 'gerente', 'user']);
  }

  navigateToTrucks() {
    this.router.navigate(['app', 'gerente', 'truck']);
  }
}
