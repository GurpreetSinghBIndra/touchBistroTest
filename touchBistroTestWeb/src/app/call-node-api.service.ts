import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CallNodeAPIService {

  constructor(private http: HttpClient) { }

  public findPrimeMedian = (maxNum: number): Promise<Array<number>> => {
    return this.http.get<Array<number>>(`http://localhost:3000/medianPrime/${maxNum}`).toPromise();
  }
}
