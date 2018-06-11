import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { KzMaskDirective } from './directives/kz-mask.directive';
import { KzPikadayDirective } from './directives/kz-pikaday.directive';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';

import { CostumerService } from './service/costumer.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    KzMaskDirective,
    KzPikadayDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CostumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
