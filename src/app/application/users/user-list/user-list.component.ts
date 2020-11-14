import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  deuses = ['Renatosiris', 'Higod', 'Gergod', 'Kamichristian']
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newUser() {

    this.router.navigate(['app', 'user', 'new-user']);
  }
}
