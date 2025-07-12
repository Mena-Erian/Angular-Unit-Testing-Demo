import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {
  calc(num1: number, num2: number, operator: string): number {
    switch (operator) {
      case '+':
        return num1 + num2;
        break;
      case '-':
        return num1 - num2;
        break;

      default:
        return 0;
    }
  }
}
