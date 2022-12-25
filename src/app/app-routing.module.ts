import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {MainComponent} from "./main/main.component";
import {WorkoutComponent} from "./workout/workout.component";

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
