import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentDashboardComponent } from './assessment-dashboard/assessment-dashboard/assessment-dashboard.component';
import { AssessmentDashboardModule } from './assessment-dashboard/assessment-dashboard.module';



const routes: Routes = [
  // { path: '', component: AssessmentDashboardComponent }
  {
    path: '',
    loadChildren: () =>
      import('./assessment-dashboard/assessment-dashboard.module').then(m => m.AssessmentDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AssessmentDashboardModule]
})
export class AppRoutingModule { }
