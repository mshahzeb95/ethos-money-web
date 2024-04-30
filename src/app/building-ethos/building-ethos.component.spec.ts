import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingEthosComponent } from './building-ethos.component';

describe('BuildingEthosComponent', () => {
  let component: BuildingEthosComponent;
  let fixture: ComponentFixture<BuildingEthosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingEthosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingEthosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
