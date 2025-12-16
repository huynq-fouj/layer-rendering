import { TestBed } from '@angular/core/testing';

import { LayerRenderService } from './layer-render.service';

describe('LayerRenderService', () => {
  let service: LayerRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
