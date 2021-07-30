import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app-page/app.component';
import { StartComponentComponent } from './components/start-component/start-component.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./logic/router-module/router-module.module";
import { DetailComponentComponent } from './components/detail-component/detail-component.component';
import { AuthorComponentComponent } from './components/author-component/author-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import {PrimeModuleModule} from "./logic/router-module/prime-module.module";

@NgModule({
  declarations: [
    AppComponent,
    StartComponentComponent,
    TableComponentComponent,
    DetailComponentComponent,
    AuthorComponentComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
      PrimeModuleModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
