import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGroupListItemComponent } from './task-group-list-item.component';

describe('TaskGroupListItemComponent', () => {
  let component: TaskGroupListItemComponent;
  let fixture: ComponentFixture<TaskGroupListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskGroupListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGroupListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
