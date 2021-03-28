import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteGridComponent } from './quote-grid.component';

describe('QuoteGridComponent', () => {
  let component: QuoteGridComponent;
  let fixture: ComponentFixture<QuoteGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
