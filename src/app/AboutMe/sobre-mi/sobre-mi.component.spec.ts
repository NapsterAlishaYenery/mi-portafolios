import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiComponent } from './sobre-mi.component';

describe('SobreMiComponent', () => {
  let component: SobreMiComponent;
  let fixture: ComponentFixture<SobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
