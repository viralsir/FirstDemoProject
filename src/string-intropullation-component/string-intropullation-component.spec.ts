import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringIntropullationComponent } from './string-intropullation-component';

describe('StringIntropullationComponent', () => {
  let component: StringIntropullationComponent;
  let fixture: ComponentFixture<StringIntropullationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringIntropullationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StringIntropullationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
