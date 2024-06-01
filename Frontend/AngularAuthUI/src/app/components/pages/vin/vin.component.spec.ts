import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VINComponent } from './vin.component';

describe('VINComponent', () => {
  let component: VINComponent;
  let fixture: ComponentFixture<VINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VINComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
