
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder,NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
 

 const MODULES_IMPORTS=[
  CommonModule,
  NzTableModule,
  NzDividerModule,
  NzStepsModule,
  NzBreadCrumbModule,
  NzDrawerModule,
  NzFormModule,
  NzDatePickerModule,
  NzSelectModule,
  NzInputModule,
  NzDrawerModule,
  NzRadioModule,
  FormsModule,

  NzIconModule,
  NzPageHeaderModule,
  NzButtonModule,
  NzDropDownModule,
  NzPopoverModule,
  ReactiveFormsModule,
 ]
@NgModule({
  declarations: [
     
  ],
  imports: [
    MODULES_IMPORTS
  ],
  exports: [
    MODULES_IMPORTS, // Export the modules for use in other modules
  ],
  providers: [
   
  ],
  
})
export class SharedSIGAMFModule { }
 