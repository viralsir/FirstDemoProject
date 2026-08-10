import { Routes } from '@angular/router';
import {StudentEntry} from '../student-entry/student-entry';
import {StudentView} from '../student-view/student-view';

export const routes: Routes = [
  {path:"Entry",component:StudentEntry},
  {path:"View",component:StudentView}
];
