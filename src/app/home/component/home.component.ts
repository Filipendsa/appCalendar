import { Component, OnInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  quote: string | undefined;
  isLoading = false;

  constructor() {}
  ngOnInit() {
    this.isLoading = true;
  }
  ngAfterViewInit(): void {
    this.isLoading = false;
  }
}
