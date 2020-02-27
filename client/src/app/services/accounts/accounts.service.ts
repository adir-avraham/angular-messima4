import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public getAllAccountsUrl = 'http://localhost:4000/getAllAccounts';

  
  constructor(private httpClient: HttpClient) { }

  

  getAcounts(): Observable<any> {
    return this.httpClient.get(this.getAllAccountsUrl);
  }

  getOneAccount(account_id: any): Observable<any> {
    return this.httpClient.get(this.getAllAccountsUrl).pipe(map((result: any) => {
      const { accounts } = result
      const selectedAccount = accounts.filter(account => account._id === account_id) 
      return selectedAccount[0].operations;
  }))
  }


}
