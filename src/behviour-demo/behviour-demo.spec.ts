import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehviourDemo } from './behviour-demo';

describe('BehviourDemo', () => {
  let component: BehviourDemo;
  let fixture: ComponentFixture<BehviourDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehviourDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(BehviourDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
