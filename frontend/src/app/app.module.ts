import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/partials/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { StarRatingComponent } from './component/partials/star-rating/star-rating.component';
import { SearchComponent } from './component/partials/search/search.component';
import { TagsComponent } from './component/partials/tags/tags.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
