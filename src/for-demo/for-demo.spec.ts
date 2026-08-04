import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDemo } from './for-demo';

describe('ForDemo', () => {
  let component: ForDemo;
  let fixture: ComponentFixture<ForDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ForDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
