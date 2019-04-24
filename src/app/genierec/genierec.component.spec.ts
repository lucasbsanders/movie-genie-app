import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenierecComponent } from './genierec.component';

describe('GenierecComponent', () => {
  let component: GenierecComponent;
  let fixture: ComponentFixture<GenierecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenierecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenierecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
