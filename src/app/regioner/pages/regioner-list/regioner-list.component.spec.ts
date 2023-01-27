import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionerListComponent } from './regioner-list.component';

describe('RegionerListComponent', () => {
  let component: RegionerListComponent;
  let fixture: ComponentFixture<RegionerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
