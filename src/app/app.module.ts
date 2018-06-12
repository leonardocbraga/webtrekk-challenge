import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { KzMaskDirective } from './directives/kz-mask.directive';
import { KzPikadayDirective } from './directives/kz-pikaday.directive';
import { DatePickerDirective } from './directives/date-picker.directive';
import { DatetimePickerDirective } from './directives/datetime-picker.directive';
import { CurrencyMaskDirective } from './directives/currency-mask.directive';
import { CurrencyMaskService } from './service/currency-mask.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';

import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    KzMaskDirective,
    KzPikadayDirective,
    CurrencyMaskDirective,
    DatePickerDirective,
    DatetimePickerDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CustomerService, CurrencyMaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
