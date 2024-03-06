import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaService } from './pessoa.service';

describe('PessoaComponent', () => {
  let component: PessoaService;
  let fixture: ComponentFixture<PessoaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PessoaService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PessoaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
