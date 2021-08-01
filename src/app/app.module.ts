import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app-page/app.component';
import { StartComponentComponent } from './components/start-component/start-component.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {routes} from "./logic/modules/router-module.module";
import { DetailComponentComponent } from './components/detail-component/detail-component.component';
import { AuthorComponentComponent } from './components/author-component/author-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import {PrimeModuleModule} from "./logic/modules/prime-module.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./logic/store/reducers";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {AppEffect} from "./logic/store/effects/app.effect";
import { HistoryComponentComponent } from './components/history-component/history-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponentComponent,
    TableComponentComponent,
    DetailComponentComponent,
    AuthorComponentComponent,
    FormComponentComponent,
    HistoryComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
      PrimeModuleModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
      EffectsModule.forRoot([AppEffect]),
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
