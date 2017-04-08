import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessMapComponent } from './homeless-map.component';

describe('HomelessMapComponent', () => {
  let component: HomelessMapComponent;
  let fixture: ComponentFixture<HomelessMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelessMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
