import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
  /**
   * 
   * @param httpclient injection lié au module app.module
   * @param router  injection lié à core-rooting.module
   */
  constructor(private httpclient: HttpClient) { }


  getListT(name: string): Observable<T[]> {
    return this.httpclient.get<T[]>(environment.apiUrl + "/" + name);
  }


  /**
   * 
   * @param data Donnée <T>
   * @param url  dépendant 
   */
  putT(data, name: string) {

    this.httpclient.put(environment.apiUrl + "/" + name + "/" + data.id, data)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  /**
   * Créer un utlisateur
   * @param user 
   */
  postT(data, name: string) {
    this.httpclient.post(environment.apiUrl + "/" + name,
      data)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  /**
   * Suppression d'un utilisateur 
   * @param id 
   */
  deleteT(id: number, name: string): void {

    this.httpclient.delete(environment.apiUrl + "/" + id)
      .subscribe(error => {
        console.log("Rrror", error);
      }
      );
  }
}