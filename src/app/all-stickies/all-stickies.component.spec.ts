import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStickiesComponent } from './all-stickies.component';

describe('AllStickiesComponent', () => {
  let component: AllStickiesComponent;
  let fixture: ComponentFixture<AllStickiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStickiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStickiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
