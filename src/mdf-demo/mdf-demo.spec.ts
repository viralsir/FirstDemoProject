import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDFDemo } from './mdf-demo';

describe('MDFDemo', () => {
  let component: MDFDemo;
  let fixture: ComponentFixture<MDFDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDFDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MDFDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
