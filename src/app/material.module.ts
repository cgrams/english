import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
	imports: [
		MatButtonModule, 
		MatCheckboxModule,
		MatCardModule,
		MatBadgeModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatBadgeModule
	]
})

export class MaterialModule{}