import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Percent } from 'lucide';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.snapButtonText! = "Oh Snap !";
    this.userHasSnapped = false;

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
}


