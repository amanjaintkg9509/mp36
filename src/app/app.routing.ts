import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

const routes: Routes =[
    { path: '', component: ComponentsComponent, pathMatch: 'full' },
    { path: 'listing',      component: NucleoiconsComponent },
    { path: 'detail',      component: ShopDetailComponent },
    { path: 'news',      component: NewsFeedComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
