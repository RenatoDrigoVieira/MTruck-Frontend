import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.scss'],
})
export class GerenteComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}
}
