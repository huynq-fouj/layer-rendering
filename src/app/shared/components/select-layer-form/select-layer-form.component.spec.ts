import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLayerFormComponent } from './select-layer-form.component';

describe('SelectLayerFormComponent', () => {
  let component: SelectLayerFormComponent;
  let fixture: ComponentFixture<SelectLayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLayerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
