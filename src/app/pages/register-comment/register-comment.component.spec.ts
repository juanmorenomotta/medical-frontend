import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCommentComponent } from './register-comment.component';

describe('RegisterCommentComponent', () => {
  let component: RegisterCommentComponent;
  let fixture: ComponentFixture<RegisterCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
