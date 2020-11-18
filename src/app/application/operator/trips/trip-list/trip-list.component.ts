import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  trips = [{modelo: 'xsqdl', placa: 'abcd1234', chassi: 'bitruck'}]
  displayedColumns: string[] = ['Modelo', 'Placa', 'Chassi', 'Actions']

  constructor(private router: Router,
    private store: Store,
    private httpService: HttpService
    ) { }

  ngOnInit(): void {
  }

  return = () => {
    this.router.navigate(['app', 'operator']);
  };

  newTrip = () => {
    this.router.navigate(['app', 'operator', 'trips', 'new-trip']);
  }

  checkTrip = () => {
    this.router.navigate(['app', 'operator', 'trips', 'overview'])
  }
}
