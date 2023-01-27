import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneComponent } from './kommune.component';

describe('KommuneComponent', () => {
  let component: KommuneComponent;
  let fixture: ComponentFixture<KommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
