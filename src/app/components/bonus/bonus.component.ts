import { Component, OnInit } from '@angular/core';
import { BonusService } from '../../services/bonus.service';
import { Bonus } from 'src/app/models/bonus';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})

export class BonusComponent implements OnInit {

  constructor(public bonusService: BonusService) { }

  
  ngOnInit() {
    this.getCards();
    const element = document.querySelectorAll('.card_item');
    console.log(element);
  }

  getCards() {
    this.bonusService.getBonuses()
      .subscribe(res => {
        this.bonusService.bonus = res as Bonus[];
        // for (let key of this.bonusService.bonus){
        //   console.log(key.type);
        // }
      });
  }

}
