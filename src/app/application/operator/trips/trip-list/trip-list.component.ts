import { Component, OnInit } from '@angular/core';
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
    private httpService: HttpService
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

  checkTrip = (tripId) => {
    this.router.navigate(['app', 'operator', 'trips', tripId]);
  };
}
