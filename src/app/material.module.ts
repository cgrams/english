import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	imports: [
		MatButtonModule, 
		MatCheckboxModule,
		MatCardModule,
		MatBadgeModule,
		MatSidenavModule,
		MatTabsModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatBadgeModule,
		MatSidenavModule,
		MatTabsModule
	]
})

export class MaterialModule{}