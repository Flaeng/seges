import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneListComponent } from './kommune-list.component';

describe('KommuneListComponent', () => {
  let component: KommuneListComponent;
  let fixture: ComponentFixture<KommuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommuneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
