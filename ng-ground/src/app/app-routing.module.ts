import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmsZeroComponent } from './components/algorithms-zero/algorithms-zero.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';


const routes: Routes = [
  { path: 'algorithms', component: AlgorithmsComponent},
  { path: 'algorithms_zero', component: AlgorithmsZeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
