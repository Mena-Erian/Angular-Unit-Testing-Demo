import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './calc/calc';
import 'zone.js';
import 'zone.js/testing';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calc],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'UnitTesting';
}
