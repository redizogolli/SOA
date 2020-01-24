import { select } from '@ngrx/store';
import { StudentService } from './../../../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'kt-orari-student',
  templateUrl: './orari-student.component.html',
  styleUrls: ['./orari-student.component.scss']
})
export class OrariStudentComponent implements OnInit {

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

	orari = [];

	degetObservable;
	vitetObservable;
  paraleliObservable;
  
  test = this.service.getVitPerDege("Bachelor në \"Biologji\"");

	selectedDege:string;
	selectedVit:number;
	selectedParalel:string;

  receivedData = [];

  constructor(public service: StudentService) {
	this.gridOptions = {
		columnDefs: this.columnDefs,
		enableFilter: true,
		enableSorting: true,
		pagination: true,

		onFirstDataRendered(params) {
		  params.api.sizeColumnsToFit();
		}
	  };
	  this.degetObservable = this.service.getDeget();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  ngOnInit() {
  }

  DegaIndexChanged(value){
    this.selectedDege = value;
    this.selectedVit = 0;
    this.selectedParalel = "";
    this.vitetObservable=this.service.getVitPerDege(this.selectedDege);
    this.paraleliObservable = this.service.getParalelPerVitDege(this.selectedDege,this.selectedVit);
  }

  VitIndexChanged(value){
    this.selectedVit = value;
    this.selectedParalel = "";
		this.paraleliObservable=this.service.getParalelPerVitDege(this.selectedDege,this.selectedVit);
  }

  ParalelIndexChanged(value){
	  this.selectedParalel = value;
		this.service.getStudentOrari(this.selectedDege,this.selectedVit,this.selectedParalel)
		.subscribe((data) => {
			this.orari = data;
			this.gridApi.setRowData(data);
		});

  }

}
