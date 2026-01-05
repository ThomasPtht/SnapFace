import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        "Archibald",
        "Mon meilleur ami depuis tout petit !",
        "https://victoiredavril.com/wp-content/uploads/2023/01/AC5368C9-F205-4EF4-8E80-292F2284F2F4-e1734105197826.webp",
        new Date(),
        10
      ),
      new FaceSnap(
        "Tokyo Skytree",
        "Une tour de télévision japonaise à Tokyo.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_y4cKxwnwMCScsX254iVuRsPLwcUa_bgobg&s",
        new Date(),
        42
      ),
      new FaceSnap(
        "Repas de Saint Valentin",
        "Un repas romantique pour la Saint Valentin.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpggWs89k8NrbA4DGRvMV1g2EewFColWQ82A&s",
        new Date(),
        128
      )
    ];


    this.faceSnaps[1].setLocation("Tokyo, Japan");

  }

}
