import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRetrievingLocationDialogComponent } from './error-retrieving-location-dialog.component';

describe('ErrorRetrievingLocationDialogComponent', () => {
  let component: ErrorRetrievingLocationDialogComponent;
  let fixture: ComponentFixture<ErrorRetrievingLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorRetrievingLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRetrievingLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
