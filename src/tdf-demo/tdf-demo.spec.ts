import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfDemo } from './tdf-demo';

describe('TdfDemo', () => {
  let component: TdfDemo;
  let fixture: ComponentFixture<TdfDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdfDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(TdfDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
