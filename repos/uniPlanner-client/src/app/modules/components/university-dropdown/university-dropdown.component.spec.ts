import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDropdownComponent } from './university-dropdown.component';

describe('UniversityDropdownComponent', () => {
  let component: UniversityDropdownComponent;
  let fixture: ComponentFixture<UniversityDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
