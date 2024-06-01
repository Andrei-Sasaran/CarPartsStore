import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmisionsComponent } from './transmisions.component';

describe('TransmisionsComponent', () => {
  let component: TransmisionsComponent;
  let fixture: ComponentFixture<TransmisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransmisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
