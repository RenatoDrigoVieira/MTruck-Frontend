import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-edit-truck',
  templateUrl: './edit-truck.component.html',
  styleUrls: ['./edit-truck.component.scss'],
})
export class EditTruckComponent implements OnInit {
  truckId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  editTruckForm = new FormGroup({
    placa: new FormControl('', [Validators.required]),
    chassi: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
    this.truckId = this.route.snapshot.paramMap.get('truckId');
    this.editTruckForm.patchValue(
      await this.httpService.get(`caminhoes/${this.truckId}`)
    );
  }

  return = () => {
    this.router.navigate(['app', 'gerente', 'truck']);
  };

  async editTruck() {
    try {
      await this.httpService.patch(
        `caminhoes/${this.truckId}`,
        this.editTruckForm.getRawValue()
      );
      this.snackBar.open('Caminhão editado com sucesso', '', {
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
