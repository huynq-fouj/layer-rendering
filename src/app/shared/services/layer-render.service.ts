import { Injectable } from '@angular/core';
import { LayerFormType } from '../types/layer';

@Injectable({
  providedIn: 'root'
})
export class LayerRenderService {

  constructor() { }

  getPreview(layer: LayerFormType, layerSelected: Map<string, {id: number, img: string}>) {
    console.log(layer, layerSelected);
  }
}
