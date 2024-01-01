import { Component, Input } from '@angular/core';
import { SharedSIGAMFModule } from '../../../app.sigamf.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [SharedSIGAMFModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() funcaoFilho: ((parametro: any) => void) | undefined;
  dynamicForm: FormGroup = new FormGroup({});;
  @Input()fields!: Field[]
  
  

  constructor(private formBuilder: FormBuilder,  private dynamicFormService: DynamicFormService) { }

  
  ngOnInit(): void {
    const formGroupConfig: FormGroupConfig = {};
    if(this.fields?.length > 0){
      this.fields.forEach(field => {
        formGroupConfig[field.field] = [field.value|| null, this.getValidators(field)];
      });
  
      this.dynamicForm = this.formBuilder.group(formGroupConfig);
    }

    
  }

  private getValidators(field: { id: number; field: string; label: string; min: number; max: number; pattern: string; type: string; listSelect: never[]; required: boolean; error_required: string; col_md: number; value?: undefined; } | { id: number; field: string; label: string; min: number; max: number; pattern: string; type: string; listSelect: { id: number; name: string; }[]; required: boolean; error_required: string; col_md: number; value: number; }): any[] {
    const validators = [];

    if (field.type === 'text') {
      validators.push(Validators.required);
      validators.push(Validators.minLength(field.min));
      validators.push(Validators.maxLength(field.max));
      // Adicione outros validadores conforme necessário
    } else if (field.type === 'number') {
      validators.push(Validators.required);
      validators.push(Validators.min(field.min));
      validators.push(Validators.max(field.max));
      // Adicione outros validadores conforme necessário
    }

    return validators;
  }
  onSubmit(){
this.  chamarFuncaoDoPai()
  }
  chamarFuncaoDoPai(): void {
    const parametro = this.dynamicForm.value;
    if (this.funcaoFilho) {
      this.funcaoFilho(parametro);
    }
  }

  getFilteredOptions(field: any) {
    console.warn("filtro",field)
    const selectedFieldValue = this.dynamicForm.get(field.field)?.value;
    const fieldToFilter=this.fields.find(f=>f.field===field?.filterBy)
    console.warn("ENCONTREI:",fieldToFilter)
     
    if(fieldToFilter && fieldToFilter.listBeforeSelect){
     /* fieldToFilter.listBeforeSelect.map((data)=>{
        return fieldToFilter.listSelect.push(data);
      })*/
      fieldToFilter.listSelect=fieldToFilter.listBeforeSelect
    }
   
  }
  
}
interface FormGroupConfig {
  [key: string]: [any, any[]]; // Ou qualquer outro tipo desejado
}

interface seletedList {
id?:number;
name?:string
}
// dynamic-form.interface.ts
export interface Field {
  id: number;
  field: string;
  label: string;
  min: number;
  max: number;
  pattern: string;
  type: 'text' | 'number'; // Adapte conforme necessário
  listSelect: { id: number; name: string; }[]; // Adapte conforme necessário
  required: boolean;
  error_required: string;
  col_md: number;
  value: number;
  isFilter: boolean;
  filterBy: string;
  listBeforeSelect?: { id: number; name: string }[];
  fk?: string;
  element_type:string
}
