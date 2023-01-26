import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneDetailsComponent } from './kommune-details.component';

describe('KommuneDetailsComponent', () => {
  let component: KommuneDetailsComponent;
  let fixture: ComponentFixture<KommuneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommuneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
