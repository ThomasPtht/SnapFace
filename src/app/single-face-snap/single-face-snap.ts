import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { FaceSnapService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }



  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }

  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false;
  }

  snap(): void {

    this.snapButtonText = "Oops, unSnap !";
    this.userHasSnapped = true;
  }


  private prepareInterface() {
    this.snapButtonText! = "Oh Snap !";
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}


