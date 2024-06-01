import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinAdminComponent } from './vin-admin.component';

describe('VinAdminComponent', () => {
  let component: VinAdminComponent;
  let fixture: ComponentFixture<VinAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
