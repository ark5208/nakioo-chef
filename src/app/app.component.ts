import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit , OnDestroy {
  lenguage = new FormControl();
  lenguages: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // tslint:disable-next-line: variable-name
  private _unsubscribeAll: Subject<any>;
  checkdata;
  dialogConfig: any;
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    
    
  }
  
  ngOnDestroy(): void {

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
}
}

