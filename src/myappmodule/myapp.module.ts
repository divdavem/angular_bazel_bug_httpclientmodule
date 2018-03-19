import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from './mycomponent';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
