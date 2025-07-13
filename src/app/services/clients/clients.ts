import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Clients {
  login(email: any, password: any): boolean {
    if (email && password) return true;
    else return false;
  }
}
