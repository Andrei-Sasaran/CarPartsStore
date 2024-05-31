import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTemplateComponent } from './parts-template.component';

describe('PartsTemplateComponent', () => {
  let component: PartsTemplateComponent;
  let fixture: ComponentFixture<PartsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
