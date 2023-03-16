import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent,
    ],
    exports: [
        HeaderComponent,
        LogoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
