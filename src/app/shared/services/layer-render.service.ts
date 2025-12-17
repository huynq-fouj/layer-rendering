import { Injectable } from '@angular/core';
import { LayerSelectedItem } from '../types/layer';

@Injectable({
  providedIn: 'root'
})
export class LayerRenderService {

  constructor() { }

  /**
   * 
   * @param canvasOptions điều chỉnh kích thước của canvas
   * @param layerSelected map layer bao gồm các ảnh và vị trí, scale của ảnh
   * @returns 
   */
  async getPreview(
    canvasOptions: {
      width: number;
      height: number;
    },
    layerSelected: Map<string, LayerSelectedItem>
  ): Promise<string> {
    const canvas = document.createElement('canvas');
    canvas.width = canvasOptions.width;
    canvas.height = canvasOptions.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Cannot get canvas context');
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const loadImage = (src: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });

    for (const [, layer] of layerSelected) {
      const img = await loadImage(layer.img);
      const { x, y, scale } = layer.options;

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }
    return canvas.toDataURL('image/png');;
  }
}
