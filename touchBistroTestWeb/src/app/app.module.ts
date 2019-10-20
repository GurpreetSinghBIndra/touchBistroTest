import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { FindMedianPrimeComponent } from './find-median-prime/find-median-prime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorComponentService } from './http-error-interceptor-component.service';

@NgModule({
  declarations: [
    AppComponent,
    NumbersOnlyDirective,
    FindMedianPrimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorComponentService,
    multi: true
  },
  {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      disableClose: true,
      hasBackdrop: true
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
