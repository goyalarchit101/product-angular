import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ConvertToSpacePipe } from './login/convert-to-space.pipe';
import { FormsModule } from '@angular/forms';
import { AppBgColorGreenDirective } from './login/app-bg-color-green.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, 
    ConvertToSpacePipe, 
    AppBgColorGreenDirective, HomeComponent, AboutComponent, CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
