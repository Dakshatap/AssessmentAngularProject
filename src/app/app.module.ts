import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentDashboardComponent } from './assessment-dashboard/assessment-dashboard/assessment-dashboard.component';
import { AssessmentDashboardModule } from './assessment-dashboard/assessment-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    // AssessmentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AssessmentDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
