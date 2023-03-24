import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  recipes: any;
  constructor(public foodService: FoodService) {
    this.recipes = this.foodService.recipes.reduce((res, item) => {
      (res[item.category] = res[item.category] || []).push(item);
      return res;
    }, Object.create(null));
  }

  ngOnInit() {}
}
