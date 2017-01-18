import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import '../../node_modules/devextreme/dist/css/dx.common.css';
import '../../node_modules/devextreme/dist/css/dx.light.css';

import { Order } from "./models/order";
import { OrderService } from "./services/order-service/order.service";

import { Country } from "./models/country";
import { CountryService } from "./services/country-service/country.service";

import { City } from "./models/city";
import { CityService } from "./services/city-service/city.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        OrderService,
        CountryService,
        CityService
    ]
})
export class AppComponent implements OnInit {
    constructor(
        private orderService: OrderService,
        private countryService: CountryService,
        private cityService: CityService
    ) { }
    ngOnInit(): void {
        this.getOrders();
        this.getCountries();
        this.getCities();
    }
    orders: Order[];
    getOrders(): void {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }
    getCountries(): void {
        this.countryService.getCountries().then(countries => this.shipCountryLookupConfig = {
            dataSource: countries,
            valueExpr: "countryName",
            displayExpr: "countryName"
        });
    }
    getCities(): void {
        this.cityService.getCities().then(cities => this.shipCityLookupConfig = {
            dataSource: (options: any) => {
                let dataSourceConfiguration: any = {
                    store: cities
                };
                if (options.data) {
                    dataSourceConfiguration.filter = ['country', '=', options.data.shipCountry];
                }
                return dataSourceConfiguration;
            },
            valueExpr: "cityName",
            displayExpr: "cityName"
        })
    };

    shipCountryLookupConfig: any;
    shipCityLookupConfig: any;
    setShipCountryValue(rowData: any, value: any): void {
        rowData.shipCity = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }
}