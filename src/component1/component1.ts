import { Component } from '@angular/core';
import {Component2} from '../component2/component2';

@Component({
  selector: 'component1',
  imports: [
    Component2
  ],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {}
