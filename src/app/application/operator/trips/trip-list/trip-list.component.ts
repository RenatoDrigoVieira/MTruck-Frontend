import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit {
  trips;
  displayedColumns: string[] = [
    'Caminhão',
    'Carga',
    'Partida',
    'Destino',
    'Actions',
  ];

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
    this.trips = await this.httpService.get(`viagens/empresa/${empresaId}`);
    console.log(this.trips);
  }

  return = () => {
    this.router.navigate(['app', 'operator']);
  };

  newTrip = () => {
    this.router.navigate(['app', 'operator', 'trips', 'new-trip']);
  };
  async deleteTrip(tripId) {
    try {
      await this.httpService.delete(`viagens/${tripId}`);
      const index = this.trips.findIndex((trip) => trip.viagem_id === tripId);
      this.trips.splice(index, 1);
      this.cdr.markForCheck();
      this.snackBar.open('Operador excluido com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
  checkTrip = (tripId) => {
    this.router.navigate(['app', 'operator', 'trips', tripId]);
  };
}
