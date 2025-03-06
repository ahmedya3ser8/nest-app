import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private firestore: Firestore) {}
  getAllBrands(collectionName: string): Observable<any> {
    const ref = collection(this.firestore, collectionName);
    return collectionData(ref, { idField: 'id' });
  }
}
