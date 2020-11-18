import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users = [{ name: 'Nome', cpf: 'CPF', email: 'Email' }];
  displayedColumns: string[] = ['Nome', 'CPF', 'Email', 'Actions'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  newUser = () => {
    this.router.navigate(['app', 'gerente', 'user', 'new-user']);
  };

  editUser = (userId) => {
    this.router.navigate(['app', 'gerente', 'user', 1]);
  };

  return = () => {
    this.router.navigate(['app', 'gerente', 'user']);
  };
}
