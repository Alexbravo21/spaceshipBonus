import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bonus } from '../models/bonus';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  selectedBonus: Bonus;
  selectedUser: User;

  bonus: Bonus[];

  constructor(private http: HttpClient) { }

  base_url =  'http://localhost:3000';

  getBonuses(){
    return this.http.get(`${this.base_url}/api/spaceship`);
  }

  redeemBonus(){

  }

}
