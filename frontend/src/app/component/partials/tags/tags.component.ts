import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];

  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
