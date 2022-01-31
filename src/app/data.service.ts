import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;

  constructor(private _http: HttpClient) { }
  getPrices() {
    //  return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
    //  .map(result => this.result = result.json());

    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
      .pipe(
        map(result => this.result = result));
  }

}
