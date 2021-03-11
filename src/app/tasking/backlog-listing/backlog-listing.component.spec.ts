import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogListingComponent } from './backlog-listing.component';

describe('BacklogListingComponent', () => {
  let component: BacklogListingComponent;
  let fixture: ComponentFixture<BacklogListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
