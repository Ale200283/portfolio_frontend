import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnhomeComponent } from './botnhome.component';

describe('BotnhomeComponent', () => {
  let component: BotnhomeComponent;
  let fixture: ComponentFixture<BotnhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotnhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotnhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
