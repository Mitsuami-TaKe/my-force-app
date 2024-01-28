import { Component, OnInit } from '@angular/core';
import { products } from '../../products'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-pruduct-detail',
  templateUrl: './pruduct-detail.component.html',
  styleUrl: './pruduct-detail.component.scss'
})
export class PruductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const productDetailObservable = this.productservice.getProductsById(+params.get('productId')!);
      productDetailObservable.subscribe({
        next: (data) => {
          this.product = data.result[0];
          console.log(`got value ${{data}}`)
        },
        error: (err) => {
          console.log(`anything happning ${{err}}`)
        }


      })
    })
  }
}
