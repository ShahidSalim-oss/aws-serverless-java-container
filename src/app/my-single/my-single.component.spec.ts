import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySingleComponent } from './my-single.component';

describe('MySingleComponent', () => {
  let component: MySingleComponent;
  let fixture: ComponentFixture<MySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
