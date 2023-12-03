import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTabsComponent } from './request-tabs.component';

describe('RequestTabsComponent', () => {
  let component: RequestTabsComponent;
  let fixture: ComponentFixture<RequestTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
