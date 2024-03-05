import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoPessoaService } from './permissao-pessoa.service';

describe('PermissaoPessoaService', () => {
  let component: PermissaoPessoaService;
  let fixture: ComponentFixture<PermissaoPessoaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissaoPessoaService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissaoPessoaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
