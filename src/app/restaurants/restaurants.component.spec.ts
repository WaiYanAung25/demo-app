import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';  
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('ResturantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [HttpClientModule]
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

  it('short-url field validity', () => {
    let errors = component.restaurantForm.errors || {};
    let storeUrl = component.restaurantForm.controls['storeUrl'];
    expect(storeUrl.valid).toBeFalsy();

    // storeUrl field is required
    errors = storeUrl.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set storeUrl to something
    storeUrl.setValue("http://abc.com/xxx");
    errors = storeUrl.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.formSubmitted).toBeTruthy();
  });

  it('form should be valid', () => {
    component.restaurantForm.controls['userName'].setValue("sasd");
    component.restaurantForm.controls['userEmail'].setValue("test@test.com");
    component.restaurantForm.controls['storeUrl'].setValue("http://abc.com/xxx");
    expect(component.restaurantForm.valid).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    const fnc = spyOn(component,'onSubmit')
    component.onSubmit()
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      expect(fnc).toHaveBeenCalledTimes(1);
    })
  });

  it('should call onSubmit method', () => {
    const fnc = spyOn(component,'onSubmit')
    component.onSubmit()
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      expect(fnc).toHaveBeenCalledTimes(1);
    })
  });
  
  it('should return object', () => {
    const description = 'A an being by';
    expect(component.findMostRepeatedWord(description)).toBeInstanceOf(Object);
  });
  
  it('should return object', () => {
    const description = 'A an being by';
    expect(component.findMostRepeatedWord(description)).toBeInstanceOf(Object);
  });
});