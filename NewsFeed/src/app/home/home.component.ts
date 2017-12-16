import { Component, OnInit } from '@angular/core';

// services
import { newsFetch } from '../../services/newsFetch';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newservice: newsFetch) { 
  };

  ngOnInit() {
  	this.newservice.gets().subscribe((data) => {
  		console.log(data);
  	});
  }

}
