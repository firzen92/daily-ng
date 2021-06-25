import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmsMinusOneComponent } from './algorithms-minus-one/algorithms-minus-one.component';
import { AlgorithmsMinusComponent } from './components/algorithms-minus/algorithms-minus.component';
import { AlgorithmsZeroComponent } from './components/algorithms-zero/algorithms-zero.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { PracticeComponent } from './components/practice/practice.component';


const routes: Routes = [
  { path: 'algorithms', component: AlgorithmsComponent},
  { path: 'algorithms_zero', component: AlgorithmsZeroComponent},
  { path: 'algorithms_minus', component: AlgorithmsMinusComponent},
  { path: 'practice', component: PracticeComponent},
  { path: 'algorithms_minusOne', component: AlgorithmsMinusOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
