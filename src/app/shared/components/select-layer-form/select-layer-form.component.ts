import { Component, OnInit } from '@angular/core';
import { LAYER } from '../../constants/layers';
import { LayerItem } from '../types/layer';

@Component({
  selector: 'app-select-layer-form',
  standalone: true,
  imports: [],
  templateUrl: './select-layer-form.component.html',
  styleUrl: './select-layer-form.component.css'
})
export class SelectLayerFormComponent implements OnInit {
  readonly layer = LAYER;
  readonly keys = Object.keys(this.layer.layerGroups);
  layerSelected = new Map<string, {id: number, img: string}>();
  preview: string = '';

  ngOnInit(): void {
    this.keys.forEach(key => {
      this.layerSelected.set(key, {
        id: this.layer.layerGroups[key].group.layers[0].id,
        img: this.layer.layerGroups[key].group.layers[0].img
      })
    });

    this.updatePreview();
  }

  trackLayerFn(item: LayerItem): number {
    return item.id;
  }

  getSelectedLayer(key: string) {
    return this.layerSelected.get(key)?.id;
  }

  selectLayer(key: string, layer: LayerItem) {
    this.layerSelected.set(key, {
      id: layer.id,
      img: layer.img
    });

    this.updatePreview();
  }

  updatePreview() {
    this.preview = 'assets/images/body/female-body.png'
  }
}
