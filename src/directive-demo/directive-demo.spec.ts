import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIRECTIVEDEMO } from './directive-demo';

describe('DIRECTIVEDEMO', () => {
  let component: DIRECTIVEDEMO;
  let fixture: ComponentFixture<DIRECTIVEDEMO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DIRECTIVEDEMO],
    }).compileComponents();

    fixture = TestBed.createComponent(DIRECTIVEDEMO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
