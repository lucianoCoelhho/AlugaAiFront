import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeService } from './cidade.service';

describe('CidadeService', () => {
  let component: CidadeService;
  let fixture: ComponentFixture<CidadeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CidadeService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CidadeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
