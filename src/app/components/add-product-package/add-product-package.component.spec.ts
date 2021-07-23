import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPackageComponent } from './add-product-package.component';

describe('AddProductPackageComponent', () => {
  let component: AddProductPackageComponent;
  let fixture: ComponentFixture<AddProductPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
