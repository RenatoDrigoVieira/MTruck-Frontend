import { GoogleMapsAPIWrapper } from '@agm/core';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit, AfterViewInit {
  cordenadas: { lat: number; lng: number }[] = [];
  trip;

  map: google.maps.Map;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {}
  async ngAfterViewInit() {
    const tripId = this.route.snapshot.paramMap.get('tripId');
    this.trip = await this.httpService.get(`viagens/${tripId}`);
    console.log(this.trip);
    const maps = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    maps.route(
      {
        origin: new google.maps.LatLng({
          lat: this.trip.origem_lat,
          lng: this.trip.origem_lng,
        }),
        destination: new google.maps.LatLng({
          lat: this.trip.destino_lat,
          lng: this.trip.destino_lng,
        }),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result) => {
        directionsDisplay.setDirections(result);
        this.cordenadas.push({
          lat: result.routes[0].legs[0].steps[0].start_location.lat(),
          lng: result.routes[0].legs[0].steps[0].start_location.lng(),
        });
        result.routes[0].legs[0].steps.forEach((route) => {
          this.cordenadas.push({
            lat: route.end_location.lat(),
            lng: route.end_location.lng(),
          });
        });
        const coordinates = new google.maps.LatLng(
          this.cordenadas[0].lat,
          this.cordenadas[0].lng
        );
        this.map = new google.maps.Map(this.gmap.nativeElement, {
          center: coordinates,
          zoom: 16,
        });
        directionsDisplay.setMap(this.map);
        let marker = new google.maps.Marker({
          position: coordinates,
          map: this.map,
          icon: {
            url:
              'https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/6885394131582988866-48.png',
          },
        });
        marker.setMap(this.map);
        let point = 1;
        setInterval(() => {
          const coordinates = new google.maps.LatLng(
            this.cordenadas[point].lat,
            this.cordenadas[point].lng
          );

          point = point + 1;
          marker.setPosition(coordinates);
          if (this.cordenadas[point] === undefined) {
            clearInterval();
          }
        }, 5000);
      }
    );
  }

  return = () => {
    this.router.navigate(['app', 'operator', 'trips']);
  };
}
