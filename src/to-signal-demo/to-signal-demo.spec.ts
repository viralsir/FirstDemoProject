import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSignalDemo } from './to-signal-demo';

describe('ToSignalDemo', () => {
  let component: ToSignalDemo;
  let fixture: ComponentFixture<ToSignalDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToSignalDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ToSignalDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
