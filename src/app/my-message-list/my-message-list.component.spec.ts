import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMessageListComponent } from './my-message-list.component';

describe('MyMessageListComponent', () => {
  let component: MyMessageListComponent;
  let fixture: ComponentFixture<MyMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
