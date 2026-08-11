import { Routes } from '@angular/router';
import {StudentEntry} from '../student-entry/student-entry';
import {StudentView} from '../student-view/student-view';
import {PostView} from '../post-view/post-view';
import {BehviourDemo} from '../behviour-demo/behviour-demo';
import {SingleDemo} from '../single-demo/single-demo';
import {ToSignalDemo} from '../to-signal-demo/to-signal-demo';

export const routes: Routes = [
  {path:"Entry",component:StudentEntry},
  {path:"View",component:StudentView},
  {path:"Post",component:PostView},
  {path:"behaviour",component:BehviourDemo},
  {path:"signal",component:SingleDemo},
  {path:"ToSignal",component:ToSignalDemo},
];
