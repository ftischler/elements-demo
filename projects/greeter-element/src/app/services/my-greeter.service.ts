import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGreeterService {
  public greet(name: string): string {
    return `Hello ${name}!`;
  }
}
