import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { LoginState } from 'src/app/store/login.state';
import { HttpService } from 'src/app/services/http-service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.scss'],
})
export class NewTruckComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  newTruckForm = new FormGroup({
    placa: new FormControl('', [Validators.required]),
    chassi: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  return = () => {
    this.router.navigate(['app', 'gerente', 'truck']);
  };

  async registerTruck() {
    try {
      const empresaId = this.store.selectSnapshot<string>(
        (state) => state.login.empresaId
      );
      await this.httpService.post('caminhoes', {
        ...this.newTruckForm.getRawValue(),
        empresa_id: empresaId,
      });
      this.snackBar.open('Caminhão cadastrado com sucesso', '', {
        duration: 5000,
      });
      this.return();
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
}
