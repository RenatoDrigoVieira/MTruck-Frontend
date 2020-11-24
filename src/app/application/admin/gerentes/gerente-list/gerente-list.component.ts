import { Route } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-gerente-list',
  templateUrl: './gerente-list.component.html',
  styleUrls: ['./gerente-list.component.scss'],
})
export class GerenteListComponent implements OnInit {
  users;
  displayedColumns: string[] = ['Nome', 'CPF', 'Email', 'Actions'];
  empresaId;
  constructor(
    private router: Router,
    private store: Store,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.empresaId = this.route.snapshot.paramMap.get('companyId');
    this.users = await this.httpService.get(
      `usuarios/gerente/${this.empresaId}`
    );
  }

  newUser = () => {
    this.router.navigate([
      'app',
      'admin',
      'company',
      this.empresaId,
      'gerentes',
      'new-user',
    ]);
  };

  editUser = (userId) => {
    this.router.navigate([
      'app',
      'admin',
      'company',
      this.empresaId,
      'gerentes',
      userId,
    ]);
  };

  async deleteUser(userId) {
    try {
      await this.httpService.delete(`usuarios/${userId}`);
      const index = this.users.findIndex((user) => user.id === userId);
      this.users.splice(index, 1);
      this.cdr.markForCheck();
      this.snackBar.open('Gerente excluido com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }

  return = () => {
    this.router.navigate(['app', 'admin', 'company']);
  };
}
