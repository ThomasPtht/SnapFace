import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { interval, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {


  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(filter(value => value % 3 === 0), map(value => value % 2 === 0 ? `Je suis ${value}, je suis pair !` : `Je suis ${value}, je suis impair !`)
    );
  }


}
