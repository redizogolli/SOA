import { Component, OnInit } from '@angular/core';
import { PedagogService } from './../../../Services/pedagog.service';

import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'kt-orari-pedagog',
  templateUrl: './orari-pedagog.component.html',
  styleUrls: ['./orari-pedagog.component.scss']
})
export class OrariPedagogComponent implements OnInit {
  pedagog = [];
  pedagogOrari = [];
  selectedPedagogName:string;

  gridOptions:GridOptions;

  private gridApi;

  columnDefs = [
    {headerName: 'Dita', field: 'dita' },
    {headerName: 'Ora', field: 'ora' },
    {headerName: 'Dega', field: 'dega'},
    {headerName: 'Lenda', field: 'lenda' },
    {headerName: 'VitiLenda', field: 'vitiLenda' },
    {headerName: 'VitiStudent', field: 'vitiStudent' },
    {headerName: 'Paraleli', field: 'paraleli' },
    {headerName: 'Klasa1', field: 'klasa1' },
    {headerName: 'Klasa2', field: 'klasa2' },
];

  constructor(public service: PedagogService) { 
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true,

      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    };

      this.service.get_PedagogNames().subscribe((data) => this.pedagog=data);
  }

  ngOnInit() {
  }

  PedagogIndexChanged(value){
    this.selectedPedagogName = value;
    this.GetOrari();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  GetOrari(){
    this.service.get_PedagogOrari(this.selectedPedagogName).subscribe((data) => {
      this.pedagogOrari = data;
      this.gridApi.setRowData(data);
    });
  }
}
