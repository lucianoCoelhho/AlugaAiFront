import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoService } from './permissao.service';

describe('PermissaoService', () => {
  let component: PermissaoService;
  let fixture: ComponentFixture<PermissaoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissaoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
