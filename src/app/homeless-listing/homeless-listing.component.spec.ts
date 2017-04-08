import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessListingComponent } from './homeless-listing.component';

describe('HomelessListingComponent', () => {
  let component: HomelessListingComponent;
  let fixture: ComponentFixture<HomelessListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelessListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelessListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
