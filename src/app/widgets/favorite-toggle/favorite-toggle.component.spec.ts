
/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteToggleComponent } from './favorite-toggle.component';
import { mockImports } from '../../shared/ionic-fake/mock.imports';
import { mockProviders } from '../../shared/ionic-fake/mock.providers';
import { Storage } from '@ionic/storage';
import { TestPage } from '../../shared/test-page/test-page';

describe('FavoriteToggleComponent', () => {
  let component: FavoriteToggleComponent;
  let fixture: ComponentFixture<FavoriteToggleComponent>;
  let storage: Storage;
  let page: FavoriteToggleComponentTest;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: mockImports.concat([

      ]),
      providers: mockProviders.concat([

      ]),
      declarations: [FavoriteToggleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteToggleComponent);
    component = fixture.componentInstance;
    storage = fixture.debugElement.injector.get(Storage);
    page = new FavoriteToggleComponentTest(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Caso o item já esteja na lista, value deve ser ==true', async () => {

    const itemMock = {
      id: '1',
      title: 'Produto teste'
    };
    component.item = itemMock;

    await storage.set('favorites', [itemMock]);

    component.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.value).toBeTruthy('value deve ser == true');
  });
  it('Ao clicar em um item que não esteja na lista de favoritos, ele deve ser incluído na lista', async () => {

    const itemMock = {
      id: '1',
      title: 'Produto teste'
    };
    component.item = itemMock;

    await storage.remove('favorites');

    component.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    page.toggleButton.click();
    await fixture.whenStable();

    const favorites = await storage.get('favorites');

    favorites.filter((favorite) => {
      return favorite.title === itemMock.title;
    });
    expect(favorites.length).toBeGreaterThan(0);
    expect(component.value).toBeTruthy('value deve ser == true');
  });

  it('Ao clicar em um item que  esteja  lista de favoritos, ele deve ser RETIRADO da lista', async () => {

    const itemMock = {
      id: '1',
      title: 'Produto teste'
    };
    component.item = itemMock;

    await storage.set('favorites', [itemMock]);
    component.ngOnInit();
    await fixture.whenStable();
    fixture.detectChanges();
    page.toggleButton.click();
    await fixture.whenStable();

    const favorites = await storage.get('favorites');

     const newList =  favorites.filter((favorite) => {
      return favorite.id === itemMock.id;
    });
    expect(newList.length).toBe(0, 'A lista de favoritos deve estar vazia');
    expect(component.value).toBeFalsy('value deve ser == false');
  });
});

class FavoriteToggleComponentTest extends TestPage<FavoriteToggleComponent> {

  get toggleButton() { return this.query<HTMLElement>('.button-favorite-toggle'); }
}

*/
