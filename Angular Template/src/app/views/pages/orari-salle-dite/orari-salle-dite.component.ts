import { IDita } from './../../../Interfaces/IDita';
import { IKlasa } from './../../../Interfaces/IKlasa';
import { EkstraktService } from './../../../Services/Ekstrakt.service';
import { Component, OnInit } from '@angular/core';
import { GridOptions} from 'ag-grid-community';

@Component({
  selector: 'kt-orari-salle-dite',
  templateUrl: './orari-salle-dite.component.html',
  styleUrls: ['./orari-salle-dite.component.scss']
})
export class OrariSalleDiteComponent implements OnInit {
  orari = [];
  gridOptions:GridOptions;

  private gridApi;

  onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }
  sallatObservable;
  ditetObservable;

  columnDefs = [
    {headerName: 'Ora', field: 'ora' },
    {headerName: 'Dega', field: 'dega' },
    {headerName: 'Lenda', field: 'lenda'},
    {headerName: 'VitiLenda', field: 'vitiLenda' },
    {headerName: 'VitiStudent', field: 'vitiStudent' },
    {headerName: 'Paraleli', field: 'paraleli' },
    {headerName: 'Pedagog', field: 'pedagog' },
    {headerName: 'NrStudent', field: 'nrStudent' }
];

  private selectedDay = 0;
  private selectedClass = 0;

  
  constructor(public service: EkstraktService) {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true,

      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    };
    this.sallatObservable = this.service.get_Sallat();
    this.ditetObservable= this.service.get_Ditet();
  }

  ngOnInit() {
  }

  DayIndexChanged(value){
    this.selectedDay = value;
    this.GetOrari();
  }
  ClassIndexChanged(value){
    this.selectedClass = value;
    this.GetOrari();
  }
  GetOrari(){
  this.service.get_OrariPerSalle(this.selectedDay,this.selectedClass).subscribe((data) => {
    this.orari = data;
    this.gridApi.setRowData(data);
  });
  }
}
