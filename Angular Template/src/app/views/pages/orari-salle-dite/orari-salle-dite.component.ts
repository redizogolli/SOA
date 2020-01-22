import { IDita } from './../../../Interfaces/IDita';
import { IKlasa } from './../../../Interfaces/IKlasa';
import { EkstraktService } from './../../../Services/Ekstrakt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-orari-salle-dite',
  templateUrl: './orari-salle-dite.component.html',
  styleUrls: ['./orari-salle-dite.component.scss']
})
export class OrariSalleDiteComponent implements OnInit {
  summaries: string[] = ['Apple', 'Orange', 'Banana'];

  private sallat  = [];
  private ditet= [];

  constructor(private service: EkstraktService) {
	this.service.get_Sallat().subscribe((Sallat: IKlasa[]) => this.sallat = Sallat);
	this.service.get_Ditet().subscribe((Ditet: IDita[]) => this.ditet = Ditet);
  }

  ngOnInit() {
  }

  filterForeCasts(x){
	console.log(this.sallat[0].klasa);
  }
}
