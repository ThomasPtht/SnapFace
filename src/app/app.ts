import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnap } from './models/face-snap';
import { Header } from './header/header';



@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;



}
