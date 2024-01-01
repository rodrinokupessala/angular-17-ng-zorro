/* 
import { Component,Input } from '@angular/core';
 
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder,NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
 
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
 
 
import { SharedSIGAMFModule } from '../../../app.sigamf.module';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<Data> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Data> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

export interface TableColumn {
  title: string;
  field: string;
}

const DEFAULT_COLUMNS: TableColumn[] = [
  { title: 'Column 1', field: 'col1' },
  { title: 'Column 2', field: 'col2' },
  { title: 'Column 3', field: 'col3' },
];

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    SharedSIGAMFModule
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']

})
export class DynamicTableComponent1 {
  placement: NzDrawerPlacement = 'left';
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: Data, b: Data) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim', byDefault: true }
      ],
      filterFn: (list: string[], item: Data) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: 'descend',
      sortFn: (a: Data, b: Data) => a.age - b.age,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Data, b: Data) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: Data) => item.address.indexOf(address) !== -1
    }
  ];
  data: Data[] = [
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    { id:1,name: 'Nome1', age: 25, address: 'Endereço1',disabled:false },
    

    // Adicione mais objetos conforme necessário
  ];
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
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Data[] = [];
  listOfData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  visible = false;

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
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Data[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
  ngOnInit(): void {
   
  }
}
*/