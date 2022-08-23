import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroInicialArtistaComponent } from './cadastro-inicial-artista.component';

describe('CadastroInicialArtistaComponent', () => {
  let component: CadastroInicialArtistaComponent;
  let fixture: ComponentFixture<CadastroInicialArtistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroInicialArtistaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroInicialArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
