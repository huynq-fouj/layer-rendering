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
    // Khởi tạo canvas, context
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvasOptions.width * dpr;
    canvas.height = canvasOptions.height * dpr;
    canvas.style.width = `${canvasOptions.width}px`;
    canvas.style.height = `${canvasOptions.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Cannot get canvas context');

    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hàm load image
    const loadImage = async (src: string): Promise<ImageBitmap | null> => {
      if (!src) return null;
      const res = await fetch(src);
      const blob = await res.blob();

      return await createImageBitmap(blob, {
        imageOrientation: 'none',
        premultiplyAlpha: 'premultiply',
        resizeQuality: 'high'
      });
    };

    // Lặp qua layer trong map
    for (const [, layer] of layerSelected) {
      const img = await loadImage(layer.img);
      if (!img) continue;
      const { x, y, scale, duplicate, gap } = layer.options;

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      // Vẽ ảnh
      ctx.drawImage(img, x, y, drawWidth, drawHeight);

      // Dùng để vẽ mắt nếu chỉ có ảnh một bên mắt
      if (duplicate) {
        // Lưu state
        ctx.save();

        // Vị trí ảnh nhân bản
        const dupX = x + drawWidth + (gap ?? 0);
        const dupY = y;

        // Lật ngược theo trục Z
        ctx.translate(dupX + drawWidth / 2, dupY + drawHeight / 2);
        ctx.rotate(Math.PI);

        // Vẽ ảnh nhân bản
        ctx.drawImage(
          img,
          -drawWidth / 2,
          -drawHeight / 2,
          drawWidth,
          drawHeight
        );

        // Khôi phục state
        ctx.restore();
      }
    }
    return canvas.toDataURL('image/png');;
  }
}
