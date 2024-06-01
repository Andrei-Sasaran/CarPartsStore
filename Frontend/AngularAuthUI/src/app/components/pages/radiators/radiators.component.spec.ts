import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiatorsComponent } from './radiators.component';

describe('RadiatorsComponent', () => {
  let component: RadiatorsComponent;
  let fixture: ComponentFixture<RadiatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
