import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneCrudComponent } from './kommune-crud.component';

describe('KommuneCrudComponent', () => {
  let component: KommuneCrudComponent;
  let fixture: ComponentFixture<KommuneCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KommuneCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
