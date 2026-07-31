import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Component1} from '../component1/component1';
import {Component2} from '../component2/component2';
import {StringIntropullationComponent} from '../string-intropullation-component/string-intropullation-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component1, Component2, StringIntropullationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  protected readonly title = signal('FirstDemoProject');
}
