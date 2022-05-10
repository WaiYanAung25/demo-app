import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ResturantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.restaurantForm.valid).toBeFalsy();
});

  it('user name field validity', () => {
    let errors = component.restaurantForm.errors || {};
    let name = component.restaurantForm.controls['userName'];
    expect(name.valid).toBeFalsy();

    // Name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set Name to something correct
    name.setValue("test@example.com");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('user email field validity', () => {
    let errors = component.restaurantForm.errors || {};
    let email = component.restaurantForm.controls['userEmail'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.formSubmitted).toBeTruthy();
  });

  it('submitting a form', () => {
    expect(component.restaurantForm.valid).toBeFalsy();
    component.restaurantForm.controls['userName'].setValue("sasd");
    component.restaurantForm.controls['userEmail'].setValue("test@test.com");
    component.restaurantForm.controls['storeUrl'].setValue("http://abc.com/xxx");
    expect(component.restaurantForm.valid).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.restaurantForm).toHaveBeenCalledTimes(1);
  });

});
