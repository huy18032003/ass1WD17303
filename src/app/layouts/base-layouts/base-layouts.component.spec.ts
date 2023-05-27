import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutsComponent } from './base-layouts.component';

describe('BaseLayoutsComponent', () => {
  let component: BaseLayoutsComponent;
  let fixture: ComponentFixture<BaseLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
