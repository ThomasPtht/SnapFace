import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: "root"
})
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
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
            42).withLocation("Tokyo, Japan"),
        new FaceSnap(
            "Repas de Saint Valentin",
            "Un repas romantique pour la Saint Valentin.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpggWs89k8NrbA4DGRvMV1g2EewFColWQ82A&s",
            new Date(),
            128
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
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