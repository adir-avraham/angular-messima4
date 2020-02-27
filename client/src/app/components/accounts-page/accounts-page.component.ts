import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { FormBuilder } from '@angular/forms';
import { OperationsService } from 'src/app/services/operations/operations.service';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit {

  public accounts: Array<any> = [];
  public myForm: any;
  public operations: Array<any> = [];
  public typeForm: string;
  account_id_Form: String;

  constructor(private accountsService: AccountsService,
     private formBuilder: FormBuilder,
     private operationsService: OperationsService) {

    this.myForm = this.formBuilder.group({
      account_id: null,
      sum: null,
      interest: null,
      payments: null,
      type: null
    })
   }

  ngOnInit() {
  
    this.accountsService.getAcounts().subscribe(result => {
      const { accounts } = result;
      this.accounts = accounts;
      })
  
  }

  getOneAccount() {
    const account_id = this.myForm.get('account_id').value
    
    this.account_id_Form = account_id;
    this.accountsService.getOneAccount(account_id).subscribe(result => {
      console.log(result)
      this.operations = result;
    }, err => {
      console.log(err)
    })
 
  }

  displayForm() {
    this.typeForm = this.myForm.get('type').value
  }

  createOperation() {
    const newOperation = {
      account_id: this.myForm.get('account_id').value,
      interest: this.myForm.get('interest').value,
      payments: this.myForm.get('payments').value,
      sum: this.myForm.get('sum').value,
      type: this.myForm.get('type').value
    }
    if (!newOperation.account_id) return;
    console.log(newOperation)
    this.operationsService.createOperation(newOperation).subscribe(result => {

      console.log({result})
      const { operations } = result.accountAndOperations
    this.operations = operations

    }, err => {
     console.log(err)
    })  
    
    this.myForm.reset()
    this.myForm.patchValue({
      interest: null,
      payments: null,
      sum: null,
      type: null,
      account_id: null
    })
  }

}
