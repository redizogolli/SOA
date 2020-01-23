import { IDita } from './../../../Interfaces/IDita';
import { IKlasa } from './../../../Interfaces/IKlasa';
import { EkstraktService } from './../../../Services/Ekstrakt.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { IOrariSalle } from './../../../Interfaces/IOrariSalle';
import {ChangeDetectorRef} from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, FirstDataRenderedEvent, RowDataChangedEvent, GridReadyEvent, GridApi } from 'ag-grid-community';
// import 'rxjs/add/operator/map';

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
  sallat  = [];
  ditet= [];
  
  subscription: Subscription[];
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

  
  constructor(public service: EkstraktService, private ref: ChangeDetectorRef) {
    this.subscription = [];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true,

      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    };
    this.service.get_Sallat().subscribe((Sallat: IKlasa[]) => this.sallat = Sallat);
    this.service.get_Ditet().subscribe((Ditet: IDita[]) => this.ditet = Ditet);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

  DayIndexChanged(value){
    this.selectedDay = value;
    console.log("day:"+this.selectedDay);
    if(this.selectedClass != 0 && this.selectedDay != 0)
    {
        this.GetOrari();
    }
  }
  ClassIndexChanged(value){
    this.selectedClass = value;
    console.log("class:"+this.selectedClass);
    if(this.selectedClass != 0 && this.selectedDay != 0)
    {
      this.GetOrari();
    }
  }
  GetOrari(){
  // this.service.get_OrariPerSalle(this.selectedDay,this.selectedClass).subscribe((Orar: IOrariSalle[]) => this.orari = Orar);
  this.service.get_OrariPerSalle(this.selectedDay,this.selectedClass).subscribe((data) => {
    this.orari = data;
    this.gridApi.setRowData(data);
  });
  }
}
