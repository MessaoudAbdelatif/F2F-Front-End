import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInfluencerComponent } from './single-influencer.component';

describe('SingleInfluencerComponent', () => {
  let component: SingleInfluencerComponent;
  let fixture: ComponentFixture<SingleInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
