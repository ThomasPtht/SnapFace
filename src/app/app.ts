import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnap } from './models/face-snap';
import { Header } from './header/header';
import { interval, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {


  interval$!: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000);
  }


}
