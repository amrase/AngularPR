import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    { "id":1,"name":"Phone XL","desc":"A large phone with one of the best screens","price":750},
    { "id":2,"name":"Phone Mini","desc":"A great phone iwth one of the best cameras","price":700},
    { "id":3,"name":"Phone Standard","desc":"","price":1000}
  ]

  share(){
    window.alert("The product has been shared")
  }

   onNotify(){
     window.alert("You will be notified when the product goes on sale!")
   }


  constructor() { }

  ngOnInit(): void {
  }

}


