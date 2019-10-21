import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFilterFormComponent } from './game-filter-form.component';

describe('GameFilterFormComponent', () => {
  let component: GameFilterFormComponent;
  let fixture: ComponentFixture<GameFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
