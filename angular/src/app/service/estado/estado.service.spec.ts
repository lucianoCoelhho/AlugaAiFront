import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoServive } from './estado.service';

describe('EstadoServive', () => {
  let component: EstadoServive;
  let fixture: ComponentFixture<EstadoServive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoServive]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoServive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
