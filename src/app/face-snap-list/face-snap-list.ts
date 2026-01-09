import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { interval, tap, take, Subject, takeUntil, Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent, AsyncPipe, NgFor],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps()

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value)
      )
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}


