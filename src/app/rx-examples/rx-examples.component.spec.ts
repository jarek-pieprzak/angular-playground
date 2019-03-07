import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxExamplesComponent } from './rx-examples.component';

describe('RxExamplesComponent', () => {
  let component: RxExamplesComponent;
  let fixture: ComponentFixture<RxExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
