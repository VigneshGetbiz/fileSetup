import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const BASE_MODULES = [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule];
const COMPONENTS = [HeaderComponent, LayoutComponent];

@NgModule({
    declarations: [
        COMPONENTS,

        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BASE_MODULES,
        RouterModule,


    ],
    exports: [
        BASE_MODULES,
        COMPONENTS
    ]
})
export class ThemeModule { }