import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService,private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    /*
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller : "Products"

    }).subscribe(data => console.log(data));

    this.httpClientService.post({
      controller : "Products"
    },{
      name:"DEneme 13",
      stock:100,
    price:3
    }).subscribe();

    
    this.httpClientService.put({
      controller:"Products",
    },{
      id:"13c3ecd4-1a12-4d86-b81c-8e610e1f1bc4",
      name:"deneme",
      stock: 1500,
      price: 5
    }).subscribe();

  
    this.httpClientService.delete({
      controller: "products"
    }, "a16b5f73-ecf5-4144-acd4-7a7adecad448").subscribe();
    */

  }
}
