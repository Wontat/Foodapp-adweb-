import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item = {
    name: 'Choco hazelnut',
    image:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/choc-hazelnut.jpg?itok=PdtRctjG',
    price: 301,
    category: 'Ice creams',
    rating: 2,
    reviews: 480,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    isFavourite: false,
  };
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      this.item =
        this.foodService.recipes.find((recipe) => recipe.name === name) || {};
    });
  }

  goBack(): void {
    this.location.back();
  }
}
