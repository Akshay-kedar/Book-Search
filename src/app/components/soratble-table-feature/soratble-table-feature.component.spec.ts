import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoratbleTableFeatureComponent } from './soratble-table-feature.component';

describe('SoratbleTableFeatureComponent', () => {
  let component: SoratbleTableFeatureComponent;
  let fixture: ComponentFixture<SoratbleTableFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoratbleTableFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoratbleTableFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
