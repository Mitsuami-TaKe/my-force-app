import { Component } from '@angular/core';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-pruduct-listings',
  templateUrl: './pruduct-listings.component.html',
  styleUrl: './pruduct-listings.component.scss'
})
export class PruductListComponent {
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.products = this.productService.getProducts();

    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe({
      next: (data) => {
        this.products = data.result;
        console.log('got value ' + data.result);
      },
      error:(err) => {
        console.error('something wrong occurred: ' + err);
      }
    })
  }
}

/*
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 5000);
});
console.log('just before subscribe');

observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
*/