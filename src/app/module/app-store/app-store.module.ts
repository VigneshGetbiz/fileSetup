import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStoreRoutingModule } from './app-store-routing.module';

import { AppStoreComponent } from './app-store.component';
import { ThemeModule } from 'src/app/core/theme.module';


@NgModule({
  declarations: [
    AppStoreComponent
  ],
  imports: [
    ThemeModule,
    CommonModule,
    AppStoreRoutingModule
  ]
})
export class AppStoreModule { }
