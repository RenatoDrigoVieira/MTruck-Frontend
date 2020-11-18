import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss'],
})
export class TruckListComponent implements OnInit {
  trucks;
  displayedColumns: string[] = ['Modelo', 'Placa', 'Chassi', 'Actions'];
  constructor(
    private router: Router,
    private store: Store,
    private httpService: HttpService
  ) {}

  async ngOnInit() {
    const empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.trucks = await this.httpService.get(`empresas/caminhoes/${empresaId}`);
    console.log(this.trucks);
  }

  return = () => {
    this.router.navigate(['app', 'gerente']);
  };

  newTruck = () => {
    this.router.navigate(['app', 'gerente', 'truck', 'new-truck']);
  };
  editTruck(truckId) {
    this.router.navigate(['app', 'gerente', 'truck', truckId]);
  }
}
