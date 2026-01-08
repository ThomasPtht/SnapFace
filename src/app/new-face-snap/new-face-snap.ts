import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import React from 'react';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, AsyncPipe, NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, UpperCasePipe, AsyncPipe, NgIf, DatePipe],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }
}
