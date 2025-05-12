import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosABMReactComponent } from './alumnos-abmreact.component';

describe('AlumnosABMReactComponent', () => {
  let component: AlumnosABMReactComponent;
  let fixture: ComponentFixture<AlumnosABMReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosABMReactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosABMReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
