import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import   item   from '../models/items'
import { addDoc,Firestore,collection } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  items: Observable<any[]>
  constructor(public firestore: AngularFirestore ) {
    this.items = firestore.collection('Products').snapshotChanges();
  }
  
  getItems(){
    return this.items;
  }

  addData(){
    const create = this.firestore.collection('Products')
    create.add({title:'happy',word:'Hello'})
  }

  updateData(id:string){
    const create = this.firestore.collection('Products');
    create.doc(id).update({title:'Not happy'})
  }


  deleteData(id:string){
    const create = this.firestore.collection('Products');
    create.doc(id).delete()

  }
}







