import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular';
@NgModule({
    imports: [
        BrowserModule,
        DevExtremeModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }