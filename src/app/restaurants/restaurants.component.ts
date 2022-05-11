import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../services/restaurant.service";
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-resturants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {

  // url= 'https://random-data-api.com/api/restaurant/random_restaurant'

  formSubmitted = false;
  restaurants:any[]= []; 
  restaurantDetails = {
    'name':'',
    'type':'',
    'description':'',
    'logo':'',
  };
  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  // creating  Reactive Form
  restaurantForm = new FormGroup({
    userName: new FormControl('',  Validators.required),
    userEmail:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    storeUrl: new FormControl('', Validators.required),
  });

  get userEmail(){
    return this.restaurantForm.get('userEmail')
  }
  
  get userName(){
    return this.restaurantForm.get('userName')
  
  }

  get storeUrl(){
    return this.restaurantForm.get('storeUrl')
  }

  // submmiting the form
  onSubmit(){
    this.showResturants(this.storeUrl?.value)
    this.formSubmitted= true;
  }

  // calling restaurants api
  showResturants(url:any){
    this.RestaurantService.getResturants(url).subscribe((response)=>{
      this.restaurantDetails=response;
      this.findMostRepeatedWord(response.description)
    })
  }

  // function for most used words
  findMostRepeatedWord(str:any) {
    var lowerCaseString = str.toLowerCase();
    let dataArray = lowerCaseString.split(' ');
    dataArray.forEach((element:any) => {
      this.restaurants[element] = (this.restaurants[element] || 0) + 1;
    });
    return this.restaurants;
  }

  goBack(){
    this.formSubmitted = false;
  }
}
