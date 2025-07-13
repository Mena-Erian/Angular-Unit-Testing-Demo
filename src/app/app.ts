import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './calc/calc';
import 'zone.js';
import 'zone.js/testing';
import { About } from './about/about';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calc, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'UnitTesting';
  userName: string = 'Mena';
}
