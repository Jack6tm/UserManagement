import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialog } from './open-dialog';

describe('OpenDialog', () => {
  let component: OpenDialog;
  let fixture: ComponentFixture<OpenDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
