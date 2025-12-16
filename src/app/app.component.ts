import { Component } from '@angular/core';
import { SelectLayerFormComponent } from './shared/components/select-layer-form/select-layer-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectLayerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'layer-rendering';
}
