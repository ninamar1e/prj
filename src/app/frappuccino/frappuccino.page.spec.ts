import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrappuccinoPage } from './frappuccino.page';

describe('FrappuccinoPage', () => {
  let component: FrappuccinoPage;
  let fixture: ComponentFixture<FrappuccinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrappuccinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
