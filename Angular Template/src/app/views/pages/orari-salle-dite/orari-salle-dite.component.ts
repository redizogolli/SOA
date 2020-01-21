import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-orari-salle-dite',
  templateUrl: './orari-salle-dite.component.html',
  styleUrls: ['./orari-salle-dite.component.scss']
})
export class OrariSalleDiteComponent implements OnInit {
  summaries: string[] = ['Apple', 'Orange', 'Banana'];
  constructor() { }

  ngOnInit() {
  }

  filterForeCasts(x){
	console.log(x);
  }
}
