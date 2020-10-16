import { Injectable } from '@angular/core';

import { from, fromEventPattern, Observable, observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../model/cliente';

@Injectable()

export class ClienteServices {
    cliente : Cliente = new Cliente();
    constructor( private firestore: AngularFirestore){
    }
listaDeClientes() : Observable<any>{
        
    return from(new Observable(observe =>{

         this.firestore.collection('cliente').snapshotChanges().subscribe(response=>{
                
              let lista:Cliente [] = [];
              response.map(obj=>{
                    
                  let cliente: Cliente = new Cliente();
                    
                 cliente.setData(obj.payload.doc.data());
                  cliente.id = obj.payload.doc.id; 
                    lista.push(cliente);

                });
                observe.next(lista);
            })

         }))

     }

}