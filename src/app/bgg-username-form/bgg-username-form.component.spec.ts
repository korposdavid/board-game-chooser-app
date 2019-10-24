import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BggUsernameFormComponent } from './bgg-username-form.component';

describe('BggUsernameFormComponent', () => {
  let component: BggUsernameFormComponent;
  let fixture: ComponentFixture<BggUsernameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BggUsernameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BggUsernameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
