import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderConfirmation: boolean = true;

  constructor(private storeService: StoreService,
              private cartService: CartService,
              private router: Router,
              private authService: AuthService ) { }

  ngOnInit() {
  }

  checkout() {
    if(this.authService.user !== undefined) {
      this.cartService.cart.userId = this.authService.user.userId;
      this.storeService.saveCart(this.cartService.cart)
      .subscribe((res: any) => {
        console.log(res);
        this.cartService.clearCart();
        this.orderConfirmation = false;
      })
    } else {
      this.router.navigate(['login']);
    }
  }

}
