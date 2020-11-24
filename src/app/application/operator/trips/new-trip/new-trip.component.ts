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
  destinos = [
    {
      id: 1,
      location: 'Diadema',
      lat: -23.681509384173122,
      lng: -46.620227423327826,
    },
    {
      id: 2,
      location: 'Toledo BR',
      lat: -23.715382916864282,
      lng: -46.5902725135282,
    },
    {
      id: 3,
      location: 'SBC - ONE BURGUER',
      lat: -23.68549456438787,
      lng: -46.55764865557297,
    },
    {
      id: 4,
      location: 'CEFSA- FTT',
      lat: -23.735789307811718,
      lng: -46.582882877581824,
    },
    {
      id: 5,
      location: 'Casa do Marcão',
      lat: -23.6240372955433,
      lng: -46.54927240209609,
    },
  ];

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  newTripForm = new FormGroup({
    caminhao_id: new FormControl('', [Validators.required]),
    carga: new FormControl('', [Validators.required]),
    endereco_origem: new FormControl(0, [Validators.required]),
    endereco_destino: new FormControl(0, [Validators.required]),
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
      const partida = this.destinos.find(
        (destino) =>
          destino.id === this.newTripForm.get('endereco_origem').value
      );
      const destino = this.destinos.find(
        (destino) =>
          destino.id === this.newTripForm.get('endereco_destino').value
      );
      await this.httpService.post(`viagens`, {
        ...this.newTripForm.getRawValue(),
        endereco_origem: partida.location,
        origem_lat: partida.lat,
        origem_lng: partida.lng,
        endereco_destino: destino.location,
        destino_lat: destino.lat,
        destino_lng: destino.lng,
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
