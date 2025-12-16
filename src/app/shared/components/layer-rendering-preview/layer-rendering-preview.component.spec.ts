import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerRenderingPreviewComponent } from './layer-rendering-preview.component';

describe('LayerRenderingPreviewComponent', () => {
  let component: LayerRenderingPreviewComponent;
  let fixture: ComponentFixture<LayerRenderingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerRenderingPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerRenderingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
