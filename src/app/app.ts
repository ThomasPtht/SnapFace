import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';
import { Header } from './header/header';
import { FaceSnapList } from './face-snap-list/face-snap-list';


@Component({
  selector: 'app-root',
  imports: [FaceSnapList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;



}
