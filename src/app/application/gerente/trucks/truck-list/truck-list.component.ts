import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private httpService: HttpService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    const empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.trucks = await this.httpService.get(`empresas/caminhoes/${empresaId}`);
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
  async deleteTruck(truckId) {
    try {
      await this.httpService.delete(`usuarios/${truckId}`);
      const index = this.trucks.findIndex((truck) => truck.id === truckId);
      this.trucks.splice(index, 1);
      this.cdr.detectChanges();
      this.snackBar.open('Caminhão excluido com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
}
