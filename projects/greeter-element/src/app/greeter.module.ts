import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { GreeterComponent } from './greeter.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    GreeterComponent
  ]
})
export class GreeterModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const calculatorElement: Function = createCustomElement(GreeterComponent, {injector: this.injector}) as Function;
    customElements.define('calculator-element', calculatorElement);
  }
}
