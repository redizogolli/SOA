// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { OrariSalleDiteComponent } from './orari-salle-dite/orari-salle-dite.component';
import { AgGridModule } from 'ag-grid-angular';
import { OrariPedagogComponent } from './orari-pedagog/orari-pedagog.component';
import { OrariStudentComponent } from './orari-student/orari-student.component';

@NgModule({
	declarations: [OrariSalleDiteComponent, OrariPedagogComponent, OrariStudentComponent],
	exports: [],
	imports: [
		AgGridModule.withComponents([]),
		CommonModule,
		CoreModule,
		PartialsModule,
	],
	providers: []
})
export class PagesModule {
}
