import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDealComponent } from './preview-deal.component';

describe('PreviewDealComponent', () => {
  let component: PreviewDealComponent;
  let fixture: ComponentFixture<PreviewDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
