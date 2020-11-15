import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.scss'],
})
export class NewTruckComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  newTruckForm = new FormGroup({
    placa: new FormControl('', [Validators.required]),
    cargar: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  return() {
    this.router.navigate(['app', 'truck']);
  }

  registerTruck() {
    this.snackBar.open('Caminhão cadastrado com sucesso', '', {
      duration: 5000,
    });

    this.return();
  }
}
