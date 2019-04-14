import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { App } from './components/app/app.component';
import { QPanel } from "./components/qpanel/qpanel.component";
import { PPanel } from "./components/ppanel/ppanel.component";
import { MyOption } from "./components/ppanel/myoption/myoption.component";

//路由清单：
const appRoutes : Routes = [
 
];
 
@NgModule({
  imports:     [ 
    BrowserModule , 
    FormsModule ,
    RouterModule.forRoot(appRoutes,{useHash: true})
   ],	 
  declarations: [ App , QPanel , PPanel , MyOption],	 
  bootstrap:    [ App ]	,
  providers : []
})
export class AppModule { }