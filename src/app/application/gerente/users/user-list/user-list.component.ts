import { Route } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private httpService: HttpService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    const empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.users = await this.httpService.get(`usuarios/operador/${empresaId}`);
  }

  newUser = () => {
    this.router.navigate(['app', 'gerente', 'user', 'new-user']);
  };

  editUser = (userId) => {
    this.router.navigate(['app', 'gerente', 'user', userId]);
  };

  async deleteUser(userId) {
    try {
      await this.httpService.delete(`usuarios/${userId}`);
      const index = this.users.findIndex((user) => user.id === userId);
      this.users.splice(index, 1);
      this.cdr.detectChanges();
      this.snackBar.open('Operador excluido com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }

  return = () => {
    this.router.navigate(['app', 'gerente']);
  };
}
