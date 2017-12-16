import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

// Constants
import { URL } from '../models/URL';

@Injectable()
export class newsFetch implements OnInit{
	constructor(private http: HttpClient){
	}

	ngOnInit(){
		console.log("fetch news");
		
	};

	gets(){
		return this.http.get(URL.NEWS_API);
	}
}