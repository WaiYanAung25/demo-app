import { Component, OnInit } from '@angular/core';
import { ResturantService } from "../services/restaurant.service";
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-resturants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {

  url= 'https://random-data-api.com/api/restaurant/random_restaurant'

  restaurants:any[]= []; 

  constructor(private resturantService: ResturantService) { }

  ngOnInit(): void {
    this.showResturants()
  }



  restaurantForm = new FormGroup({

    userName: new FormControl('',  Validators.required),
    userEmail:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    storeName: new FormControl('',  Validators.required,),
    description: new FormControl(''),
  });

  get userEmail(){
    return this.restaurantForm.get('userEmail')
  
  }
  get userName(){
    return this.restaurantForm.get('userName')
  
  }

  get storeName(){
    return this.restaurantForm.get('storeName')
  
  }

  onSubmit(){
    console.warn(  this.restaurantForm + 'resturant form submit');
  }



 findMostRepeatedWord(str:any) {
  var lowerCaseString = str.toLowerCase();
  let dataArray = lowerCaseString.split(' ');


  console.log(lowerCaseString)
  dataArray.forEach((element:any) => {
      this.restaurants[element] = (this.restaurants[element] || 0) + 1;
  });
console.error(this.restaurants)

}



showResturants(){
  this.resturantService.getResturants(this.url).subscribe((response)=>{
    this.findMostRepeatedWord(response.description)
  })
}



}
