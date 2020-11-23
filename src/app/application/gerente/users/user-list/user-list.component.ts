import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users;
  displayedColumns: string[] = ['Nome', 'CPF', 'Email', 'Actions'];
  constructor(
    private router: Router,
    private store: Store,
    private httpService: HttpService
  ) {}

  async ngOnInit() {
    const empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.users = await this.httpService.get(`usuarios/empresa/${empresaId}`);
    console.log(this.users);
  }

  newUser = () => {
    this.router.navigate(['app', 'gerente', 'user', 'new-user']);
  };

  editUser = (userId) => {
    this.router.navigate(['app', 'gerente', 'user', userId]);
  };

  return = () => {
    this.router.navigate(['app', 'gerente']);
  };
}
