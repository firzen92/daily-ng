import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';


const routes: Routes = [
  { path: 'algorithms', component: AlgorithmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
