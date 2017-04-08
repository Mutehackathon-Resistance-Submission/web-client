import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentAreaComponent } from './side-content-area.component';

describe('SideContentAreaComponent', () => {
  let component: SideContentAreaComponent;
  let fixture: ComponentFixture<SideContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
