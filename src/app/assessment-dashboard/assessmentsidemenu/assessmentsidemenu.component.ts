import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessmentsidemenu',
  templateUrl: './assessmentsidemenu.component.html',
  styleUrls: ['./assessmentsidemenu.component.scss']
})
export class AssessmentsidemenuComponent implements OnInit {
  isMobMenu: boolean = false;
  constructor() { }
  sidemenulist = [
    {
      title: 'Dashboard',
      icon: './assets/icon/dashboard.svg'
    },
    {
      title: 'Assessments',
    },
    {
      title: 'My Library',
    },
  ]


  bar() {
    this.isMobMenu = !this.isMobMenu;
  }

  ngOnInit(): void {
    this.sidemenulist
    let width = screen.width;
    console.log('width', width)
    if (width > 499) {
      this.isMobMenu = true;
      console.log('width lapi', width)

    } else {
      this.isMobMenu = false;
      console.log('width mob', width)


    }
  }

}
