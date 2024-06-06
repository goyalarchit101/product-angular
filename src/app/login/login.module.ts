import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { AppBgColorGreenDirective } from './app-bg-color-green.directive';



@NgModule({
  declarations: [
    LoginComponent,
    ConvertToSpacePipe,
    AppBgColorGreenDirective
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
