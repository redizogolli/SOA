import { IDita } from './../../../Interfaces/IDita';
import { IKlasa } from './../../../Interfaces/IKlasa';
import { EkstraktService } from './../../../Services/Ekstrakt.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrariSalle } from './../../../Interfaces/IOrariSalle';

// import 'rxjs/add/operator/map';

@Component({
  selector: 'kt-orari-salle-dite',
  templateUrl: './orari-salle-dite.component.html',
  styleUrls: ['./orari-salle-dite.component.scss']
})
export class OrariSalleDiteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  private sallat  = [];
  private ditet= [];
  private orari = [];

  private selectedDay = 0;
  private selectedClass = 0;

  constructor(private service: EkstraktService) {
  }

  ngOnInit() {
    this.LoadData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

  async LoadData(){
    await this.service.get_Sallat().subscribe((Sallat: IKlasa[]) => this.sallat = Sallat);
    await this.service.get_Ditet().subscribe((Ditet: IDita[]) => this.ditet = Ditet);
  }

  DayIndexChanged(value){
    this.selectedDay = value;
    if(this.selectedClass != 0 && this.selectedDay != 0)
    {
        this.GetOrari();
    }
  }
  ClassIndexChanged(value){
    this.selectedClass = value;
    if(this.selectedClass != 0 && this.selectedDay != 0)
    {
      this.GetOrari();
    }
  }
  GetOrari(){
    this.service.get_OrariPerSalle(this.selectedDay,this.selectedClass).subscribe((Orar: IOrariSalle[]) => this.orari = Orar);
  }
}
