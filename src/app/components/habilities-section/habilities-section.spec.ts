import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitiesSection } from './habilities-section';

describe('HabilitiesSection', () => {
  let component: HabilitiesSection;
  let fixture: ComponentFixture<HabilitiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitiesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilitiesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
