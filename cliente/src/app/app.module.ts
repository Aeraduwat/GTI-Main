import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DatePipe
  ],
  declarations: [
    AppComponent,
    NopageFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
