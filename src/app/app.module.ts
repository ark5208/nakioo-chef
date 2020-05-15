import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatIconModule, MatProgressSpinnerModule,
  MatSelectModule, MatGridListModule
} from '@angular/material';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  providers: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
