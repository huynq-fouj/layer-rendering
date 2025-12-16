import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerItemsComponent } from './layer-items.component';

describe('LayerItemsComponent', () => {
  let component: LayerItemsComponent;
  let fixture: ComponentFixture<LayerItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
