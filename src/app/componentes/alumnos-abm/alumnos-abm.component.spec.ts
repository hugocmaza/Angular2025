import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosABMComponent } from './alumnos-abm.component';

describe('AlumnosABMComponent', () => {
  let component: AlumnosABMComponent;
  let fixture: ComponentFixture<AlumnosABMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosABMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
