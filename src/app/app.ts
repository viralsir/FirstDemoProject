import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Component1} from '../component1/component1';
import {Component2} from '../component2/component2';
import {StringIntropullationComponent} from '../string-intropullation-component/string-intropullation-component';
import {PropertyBindingComponent} from '../property-binding-component/property-binding-component';
import {EventBinding} from '../event-binding/event-binding';
import {TwoWayDatabinding} from '../two-way-databinding/two-way-databinding';
import {DIRECTIVEDEMO} from '../directive-demo/directive-demo';
import {ForDemo} from '../for-demo/for-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component1, Component2, StringIntropullationComponent, PropertyBindingComponent, EventBinding, TwoWayDatabinding, DIRECTIVEDEMO, ForDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  protected readonly title = signal('FirstDemoProject');
}
