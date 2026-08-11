import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDemo } from './single-demo';

describe('SingleDemo', () => {
  let component: SingleDemo;
  let fixture: ComponentFixture<SingleDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
