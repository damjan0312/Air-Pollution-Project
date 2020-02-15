import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatSortModule, MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule

    ],
    exports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [MatNativeDateModule],
})
export class MaterialModule { }
