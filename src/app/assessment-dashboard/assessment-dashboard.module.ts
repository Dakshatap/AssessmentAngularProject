import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentDashboardComponent } from './assessment-dashboard/assessment-dashboard.component';
import { AssessmentsidemenuComponent } from './assessmentsidemenu/assessmentsidemenu.component';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  { path: '', component: AssessmentDashboardComponent,children: [
   { path: '', component: AssessmentComponent}
  ]}
];

@NgModule({
  declarations: [
    AssessmentDashboardComponent,
    AssessmentsidemenuComponent,
    AssessmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)]
  
})
export class AssessmentDashboardModule { }
