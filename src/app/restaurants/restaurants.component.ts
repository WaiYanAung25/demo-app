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
  formSubmitted = false;
  mostRepeatedWords:any[]= []; 
  restaurantDetails = {
    'name':'',
    'type':'',
    'description':'',
    'logo':'',
  };
  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit(): void {}

  // creating  Reactive Form
  restaurantForm = new FormGroup({
    userName: new FormControl('',  Validators.required),
    userEmail:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    storeUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
    
    ]),
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
      this.mostRepeatedWords = this.findDuplicateWords(response.description);
    })
  }

  // function for most used words
  findDuplicateWords(str:any) {
    let dataArray =  str.toLowerCase().split(' ');
    const duplicateWords = dataArray.reduce((accumulator:any, value:any) => {
      return {...accumulator, [value]: (accumulator[value] || 0) + 1};
    }, {});
    return duplicateWords;
  }

  goBack(){
    this.formSubmitted = false;
  }

  
}
