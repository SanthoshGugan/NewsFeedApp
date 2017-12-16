import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-specific',
  templateUrl: './news-specific.component.html',
  styleUrls: ['./news-specific.component.css']
})
export class NewsSpecificComponent implements OnInit {

  constructor(private routerData: ActivatedRoute) { }

  ngOnInit() {
  	   this.routerData.params.subscribe((params) => {
  	   	console.log(params);
  	   });
  }

}
