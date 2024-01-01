 
import { Component,Input, OnInit } from '@angular/core';
 
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder,NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
 
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
 
 
import { SharedSIGAMFModule } from '../../../app.sigamf.module';
 
@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    SharedSIGAMFModule
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']

})
export class DynamicTableComponent implements OnInit {
  @Input() placement: NzDrawerPlacement = 'left';
  @Input() listOfColumns: any[] = [];
  @Input() data: any[] = [];
  @Input() headerTable: HeaderTable={};
  
  checked = false;
  indeterminate = false;
 
  setOfCheckedId = new Set<number>();
  visible = false;
  listOfCurrentPageData: readonly any[] = [];
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];

 

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id));
    this.indeterminate =
      this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {
    if (this.listOfColumns.length === 0) {
      console.error('Você não forneceu uma lista de colunas para o componente dinâmico.');
    }
  }
  getColumnValue(rowData: any, column: any): any {
    return rowData[column.name];
  }
  onBack(): void {
    console.log('onBack');
  }
}
export interface HeaderTable{
  title?:string;
  description?:string;
  breadcrumb?:string[];
}