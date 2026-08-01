import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './two-way-databinding.html',
  styleUrl: './two-way-databinding.css',
})
export class TwoWayDatabinding {
  name:string="Vimal";
}
