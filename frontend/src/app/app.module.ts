import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/partials/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { StarRatingComponent } from './component/partials/star-rating/star-rating.component';
import { SearchComponent } from './component/partials/search/search.component';
import { TagsComponent } from './component/partials/tags/tags.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { TitleComponent } from './component/partials/title/title.component';
import { NotFoundComponent } from './component/partials/not-found/not-found.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
