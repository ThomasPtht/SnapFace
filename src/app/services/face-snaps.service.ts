import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class FaceSnapService {

    constructor(private http: HttpClient) { }

    private faceSnaps: FaceSnap[] = [];

    getFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // faceSnap.snap(snapType);
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
        const faceSnap = new FaceSnap(
            formValue.title,
            formValue.description,
            formValue.imageUrl,
            new Date(),
            0
        );

        if (formValue.location) {
            faceSnap.setLocation(formValue.location);
        }

        this.faceSnaps.push(faceSnap);
    }
}