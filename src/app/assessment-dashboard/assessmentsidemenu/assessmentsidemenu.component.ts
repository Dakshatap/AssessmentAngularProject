import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessmentsidemenu',
  templateUrl: './assessmentsidemenu.component.html',
  styleUrls: ['./assessmentsidemenu.component.scss']
})
export class AssessmentsidemenuComponent implements OnInit {

  constructor() { }
  sidemenulist = [
    {
      title: 'Dashboard',
      icon:'./assets/icon/dashboard.svg'
    },
    {
      title: 'Assessments',
    },
    {
      title: 'My Library',
    },
  ]




  ngOnInit(): void {
    this.sidemenulist
  }

}
