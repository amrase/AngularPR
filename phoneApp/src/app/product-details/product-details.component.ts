import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  products:ProductListComponent[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let routeParam = this.route.snapshot.paramMap;
    
   
  }

}
