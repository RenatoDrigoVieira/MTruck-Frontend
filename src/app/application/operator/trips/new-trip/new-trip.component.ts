import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) { }

  newTripForm = new FormGroup({
    caminhao: new FormControl('', [Validators.required]),
    partida: new FormControl('', [Validators.required]),
    destino: new FormControl('', [Validators.required]),
    carga: new FormControl('', [Validators.required]),
    peso: new FormControl('', [Validators.required]),
  });
  
  ngOnInit(): void {
  }

  return = () => {
    this.router.navigate(['app', 'operator', 'trips']);
  };

  registerTrip(): void {
    console.log('dale')
  }
}
