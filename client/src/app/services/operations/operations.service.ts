import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public createOperationUrl = "http://localhost:4000/createOperation"

  constructor(private httpClient: HttpClient) { }


  createOperation(newOperation: any): Observable<any> {
   
    return this.httpClient.post(this.createOperationUrl, newOperation);
  }

}
