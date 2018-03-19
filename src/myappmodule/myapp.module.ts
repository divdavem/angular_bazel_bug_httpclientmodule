import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MyComponent } from './mycomponent';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
