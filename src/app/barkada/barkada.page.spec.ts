import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarkadaPage } from './barkada.page';

describe('BarkadaPage', () => {
  let component: BarkadaPage;
  let fixture: ComponentFixture<BarkadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarkadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
