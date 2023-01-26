import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommuneNavnComponent } from './kommune-navn.component';

describe('KommuneNavnComponent', () => {
  let component: KommuneNavnComponent;
  let fixture: ComponentFixture<KommuneNavnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ KommuneNavnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KommuneNavnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
