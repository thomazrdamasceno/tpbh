import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, defer, of, from } from 'rxjs';
import { QueryFn } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { DataStubService, SetOrUpdateMode } from '../../data-stub/data-stub.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMock {


  constructor(private dataStub: DataStubService) {
  }


  createId(): string {

    return `id-${new Date().getTime()}`;
  }

  collection<T>(path: string, queryFn?: QueryFn) {

    console.log('path aqui: ');
    console.log(path);

    return {
      valueChanges: () => {

        const itens = this.dataStub.get(path);


        console.log('Itens antes da conversão');
        console.log(itens);


        // Transforma a collection em um
        const array = [];
        for (const key in itens) {
          array.push(itens[key]);
        }

        console.log('Itens aqui: ');
        console.log(array);


        // Filtra os itens
        if (queryFn) {

          console.log('Lista de argumentos: ');
          // console.log(queryFn.);
        }

        const observable = new Observable<Array<any>>(observer => {
          observer.next(array);
          observer.complete();

        }).pipe(
          delay(2000)
        );
        return observable;

      }
    };

  }


  doc<T>(path: string) {

    return {

      valueChanges: () => {

          const item = this.dataStub.get(path);

          const observable = new Observable<Array<any>>(observer => {

            setTimeout(() => {
              observer.next(item);
              observer.complete();
            });


          });

          return observable;


      },


      delete: () => {

        const promise = new Promise((resolve, reject) => {

          this.dataStub.delete(path);
          resolve();
        });

        return promise;

      },

      set: (object: any) => {

        const promise = new Promise((resolve, reject) => {

          const item = this.dataStub.setOrUpdate(path, object, SetOrUpdateMode.SET);
          resolve(item);
        });

        return promise;

      },

      update: (object: any) => {

        const promise = new Promise((resolve, reject) => {

          const item = this.dataStub.setOrUpdate(path, object, SetOrUpdateMode.UPDATE);
          resolve(item);
        });

        return promise;

      }

    };

  }

}
