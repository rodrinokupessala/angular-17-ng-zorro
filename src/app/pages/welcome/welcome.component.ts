import { Component, OnInit } from '@angular/core';
import { DynamicTableComponent, HeaderTable } from '../../component/shared/dynamic-table/dynamic-table.component';
import { CommonModule } from '@angular/common';
import { DATA_TABLE_TEST } from './data';
import { DynamicFormComponent, Field } from '../../component/shared/dynamic-form/dynamic-form.component';
import { ValidationsGeneralService } from '../../services/base/validations-general.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[
    DynamicTableComponent,
    DynamicFormComponent,
    CommonModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  headerTable:HeaderTable={
    title:'Teste dados',
    description:'Testando template table dados',
    breadcrumb:["Users","Listar"]
  }
  right='right'
 
 //Table data
 tableData =  DATA_TABLE_TEST
 listOfColumns = [
  {
    name: 'Id',
    column:'id',
    width:'20px',
    sortOrder: 'descend',
    sortFn: (a: { id: number; }, b: { id: number; }) => a.id - b.id,
    sortDirections: ['descend', null],
    listOfFilter: [],
    filterFn: null,
    filterMultiple: true
  },
  {
    name: 'Name',
    column:'name',
    width:'100px',
    sortOrder: null,
    sortFn: (a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name),
    sortDirections: ['ascend', 'descend', null],
    filterMultiple: true,
    listOfFilter: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim', 
      //byDefault: true
     }
    ],
    filterFn: (list: string[], item: { name: string | string[]; }) => list.some(name => item.name.indexOf(name) !== -1)
  },
  {
    name: 'Age',
    column:'age',
    width:'30px',
    sortOrder: 'descend',
    sortFn: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    sortDirections: ['descend', null],
    listOfFilter: [],
    filterFn: null,
    filterMultiple: true
  },
  {
    name: 'Address',
    column:'address',
    width:'40px',
    sortOrder: null,
    sortDirections: ['ascend', 'descend', null],
    sortFn: (a: { address: string | any[]; }, b: { address: string | any[]; }) => a.address.length - b.address.length,
    filterMultiple: false,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: { address: string | string[]; }) => item.address.indexOf(address) !== -1
  }
];
 // table column Names
 columns= [
   { title: 'ID', field: 'id' },
   { title: 'Name', field: 'name' },
   { title: 'Age', field: 'age' },
 ];

 fields: Field[] = [
  { 
    id: 1, 
    field: 'telefone', 
    label: 'Terminal telefónico', 
    min: 1, 
    max: 15, 
    pattern: this.validationService.phoneValidationPattern().toString(), 
    type: 'number', 
    element_type:'input',
    listSelect: [], 
    required: true, 
    error_required: "Por favor informe o terminal", 
    col_md: 12, 
    value: 0, 
    isFilter: false, 
    filterBy: '' // Campo usado para filtrar
  },
    
  { 
    id: 3, 
    field: 'pais_id', 
    label: 'País', 
    min: 1, 
    max: 10, 
    pattern: '', 
    type: 'number', 
    element_type:'select',
    listSelect: [{ id: 1, name: 'Angola' }], 
    required: true, 
    error_required: "Por favor informe o id do país", 
    col_md: 12, 
    value: 0, 
    isFilter: false, 
    filterBy: 'provincia_id' // Campo usado para filtrar
  },
  { 
    id: 4, 
    field: 'provincia_id', 
    label: 'Província', 
    min: 1, 
    max: 10, 
    pattern: '', 
    type: 'number', 
    element_type:'select',
    listSelect: [], 
    listBeforeSelect: [{ id: 1, name: 'Humbo',parent:1},{ id: 2, name: 'Benguela',parent:2 }], 
    required: true, 
    error_required: "Por favor informe o id da província", 
    col_md: 12, 
    value: 0, 
    isFilter: true, 
    filterBy: 'pais_id' // Campo usado para filtrar
  },
  { 
    id: 4, 
    field: 'curso_id', 
    label: 'Curso', 
    min: 1, 
    max: 10, 
    pattern: '', 
    type: 'number', 
    element_type:'select',
    listSelect: [{ id: 1, name: 'Direito',parent:1},{ id: 2, name: 'Psicologia',parent:2 }], 
    listBeforeSelect: [], 
    required: true, 
    error_required: "Por favor informe o id da província", 
    col_md: 12, 
    value: 0, 
    isFilter: false, 
    filterBy: 'turma_id' // Campo usado para filtrar
  },
  { 
    id: 4, 
    field: 'turma_id', 
    label: 'Turma', 
    min: 1, 
    max: 10, 
    pattern: '', 
    type: 'number', 
    element_type:'select',
    listSelect: [], 
    listBeforeSelect: [{ id: 1, name: 'A2',parent:1},{ id: 2, name: 'A1',parent:2 }], 
    required: true, 
    error_required: "Por favor informe o id da província", 
    col_md: 12, 
    value: 0, 
    isFilter: true, 
    filterBy: 'curso_id' // Campo usado para filtrar
  }
  // Adicione outros campos conforme necessário
];
constructor(private validationService:ValidationsGeneralService){

}
 ngOnInit(): void {
 }
 
 funcaoDoPai(parametro: any): void {
  // Lógica que você deseja executar no componente filho
  console.log('Função do pai executada com parâmetro:', parametro);
}
}
