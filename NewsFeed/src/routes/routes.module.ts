import {Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import {HomeComponent} from '../app/home/home.component';
import {NewsSpecificComponent } from '../app/news-specific/news-specific.component';
const routes:Routes = [
	{path:'home', component:HomeComponent},
	{path: 'newsfeed/:id', component:NewsSpecificComponent},
	{path: '**', component: HomeComponent}
];

@NgModule({
	imports:[
		RouterModule.forRoot(routes,{enableTracing: false})
	],
	exports:[RouterModule],
	declarations:[],
	providers:[]
})
export class NewsRouterModule{}