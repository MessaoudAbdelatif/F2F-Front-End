import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInfluencerComponent } from './preview-influencer.component';

describe('PreviewInfluencerComponent', () => {
  let component: PreviewInfluencerComponent;
  let fixture: ComponentFixture<PreviewInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
