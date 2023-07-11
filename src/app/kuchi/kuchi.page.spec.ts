import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KuchiPage } from './kuchi.page';

describe('KuchiPage', () => {
  let component: KuchiPage;
  let fixture: ComponentFixture<KuchiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KuchiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
