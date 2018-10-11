import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
//constante de rutas
const routes:Route[]=[
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'form',component:FormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
