import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
restaurants:any=[];
restaurant:{
  restaurantId:"",
  name:"",
  description:"",
  address:"",
  isPrivateRoom:"",
  isSmokingzone:"",
  isWifi:""

}
  constructor(private _http:Http) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(){
    this._http.get("http://localhost:8080/Test-Module/restaurant/getAll").subscribe(data=>{console.log(data.json())});
  }

}
