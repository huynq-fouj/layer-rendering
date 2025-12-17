import { Component, inject, OnInit } from '@angular/core';
import { LAYER } from '../../constants/layers';
import { LayerItem, LayerSelectedItem } from '../../types/layer';
import { LayerRenderService } from '../../services/layer-render.service';

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
  layerSelected = new Map<string, LayerSelectedItem>();
  preview: string = '';
  private lrService = inject(LayerRenderService);

  ngOnInit(): void {
    this.keys.forEach(key => {
      this.layerSelected.set(key, {
        id: this.layer.layerGroups[key].group.layers[0].id,
        img: this.layer.layerGroups[key].group.layers[0].img,
        options: { ...this.layer.layerGroups[key].group.options }
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
      img: layer.img,
      options: { ...this.layer.layerGroups[key].group.options }
    });

    this.updatePreview();
  }

  updatePreview() {
    this.lrService.getPreview(
      { 
        width: this.layer.width,
        height: this.layer.height
      },
      this.layerSelected
    ).then(preview => this.preview = preview);
  }
}
