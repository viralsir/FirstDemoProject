import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorView } from './author-view';

describe('AuthorView', () => {
  let component: AuthorView;
  let fixture: ComponentFixture<AuthorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorView],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
