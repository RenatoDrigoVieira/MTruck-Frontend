import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss'],
})
export class NewTripComponent implements OnInit {
  trucks;
  empresaId;

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  newTripForm = new FormGroup({
    caminhao_id: new FormControl('', [Validators.required]),
    carga: new FormControl('', [Validators.required]),
    endereco_origem: new FormControl('', [Validators.required]),
    endereco_destino: new FormControl('', [Validators.required]),
    peso_inicial: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
    this.empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.trucks = await this.httpService.get(
      `empresas/caminhoes/${this.empresaId}`
    );
  }

  return = () => {
    this.router.navigate(['app', 'operator', 'trips']);
  };

  async registerTrip() {
    try {
      console.log(this.newTripForm.getRawValue());
      await this.httpService.post(`viagens`, {
        ...this.newTripForm.getRawValue(),
        empresa_id: this.empresaId,
      });
      this.snackBar.open('Viagem cadastrada com sucesso', 'Ok', {
        panelClass: 'snackbar',
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.return();
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
}
