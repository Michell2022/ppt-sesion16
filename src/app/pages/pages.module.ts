import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BreakingComponent } from './breaking/breaking.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    BreakingComponent
  ]
})
export class PagesModule { }
