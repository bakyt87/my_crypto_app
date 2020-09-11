import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { CoinInfo } from './CoinInfo';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }


  getAPIData(coin, currency):Observable<CoinInfo[]>{
    return this.http.get<CoinInfo[]>('https://api.coingecko.com/api/v3/simple/price?ids='+coin+'&vs_currencies='+currency);
  }
  getCurrency(){
    return this.http.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
  }
 
  getList():Observable<CoinInfo[]>{
    return this.http.get<CoinInfo[]>('https://api.coingecko.com/api/v3/coins/');
  }
  getCoin(id): Observable<CoinInfo>{
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/'+id) 
  }
}
