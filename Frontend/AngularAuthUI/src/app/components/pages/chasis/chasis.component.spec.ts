import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasisComponent } from './chasis.component';

describe('ChasisComponent', () => {
  let component: ChasisComponent;
  let fixture: ComponentFixture<ChasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChasisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
