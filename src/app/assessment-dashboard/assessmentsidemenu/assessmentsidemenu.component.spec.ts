import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsidemenuComponent } from './assessmentsidemenu.component';

describe('AssessmentsidemenuComponent', () => {
  let component: AssessmentsidemenuComponent;
  let fixture: ComponentFixture<AssessmentsidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentsidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentsidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
