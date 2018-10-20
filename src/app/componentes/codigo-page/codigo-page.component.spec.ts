import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoPageComponent } from './codigo-page.component';

describe('CodigoPageComponent', () => {
  let component: CodigoPageComponent;
  let fixture: ComponentFixture<CodigoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
