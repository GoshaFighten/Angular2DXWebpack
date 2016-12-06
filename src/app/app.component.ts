import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import '../../node_modules/devextreme/dist/css/dx.common.css';
import '../../node_modules/devextreme/dist/css/dx.light.css';

import { Order } from "./models/order";
import { OrderService } from "./services/order-service/order.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [OrderService]
})
export class AppComponent implements OnInit {
    constructor(private orderService: OrderService) { }
    ngOnInit(): void {
        this.getOrders();
    }
    orders: Order[];
    getOrders(): void {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }
}