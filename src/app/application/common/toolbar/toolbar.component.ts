import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetLoggout } from 'src/app/store/login.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  addFunction;
  @Input()
  return;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  loggout() {
    this.store.dispatch(new SetLoggout());
    this.router.navigate(['']);
  }
}
