import { Component, Input } from '@angular/core';
import { SharedSIGAMFModule } from '../../../app.sigamf.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormService } from './dynamic-form.service';
import { ActivatedRoute } from '@angular/router';

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
  
  

  constructor(private formBuilder: FormBuilder,  private dynamicFormService: DynamicFormService,private route: ActivatedRoute) {

      
   }
loadDataParams(){
  this.route.queryParams.subscribe(params => {
    console.warn(params)
  this.fields.map((data:any)=>{
    //Buscar vaçor
    const findParam = Number(params[data.field])
    //Verificar 
    if(findParam > 0){
      const selectedFieldValue = this.dynamicForm.patchValue({
        [data.field]:findParam
      })
     //fistrar dependencias
     this.getFilteredOptions(findParam,data)
    }else{

    }
   
  })
  //  const selectedFieldValue = this.dynamicForm.get(field.field)?.value;
  
      // Faça algo com os valores dos parâmetros
    });
  
}
  
  ngOnInit(): void {
    const formGroupConfig: FormGroupConfig = {};
    if(this.fields?.length > 0){
      this.fields.forEach(field => {
        formGroupConfig[field.field] = [field.value|| null, this.getValidators(field)];
      });
  
      this.dynamicForm = this.formBuilder.group(formGroupConfig);
      
    }

   //preencher paramtros
   this.loadDataParams()
  }

  private getValidators(field: { id: number; field: string; label: string; min: number; max: number; pattern:  string; type: string; listSelect: never[]; required: boolean; error_required: string; col_md: number; value?: undefined; } | { id: number; field: string; label: string; min: number; max: number; pattern: string; type: string; listSelect: { id: number; name: string; }[]; required: boolean; error_required: string; col_md: number; value: number; }): any[] {
    const validators = [];
   /* if (field.pattern) {
      console.warn("pattern:",field.pattern)
      validators.push(Validators.pattern(field.pattern));
      console.log("Validators for pattern:", validators);
    }*/
    if (field.type === 'text') {
      validators.push(Validators.required);
      //validators.push(Validators.minLength(field.min));
      //validators.push(Validators.maxLength(field.max));
      // Adicione outros validadores conforme necessário
    } else if (field.type === 'number') {
      validators.push(Validators.required);
      validators.push(Validators.min(field.min));
      //validators.push(Validators.max(field.max));
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

  getFilteredOptions(event:any,field: any) {
    try{
      const selectedFieldValue = this.dynamicForm.get(field.field)?.value;
      const columFiterl={[field?.field]:Number(event)}
      console.warn("EVENT",columFiterl)
     
      const fieldToFilter=this.fields.find(f=>f.field===field?.filterBy)
      console.warn("ENCONTREI:",fieldToFilter)
       
      if(fieldToFilter && fieldToFilter.listBeforeSelect){
       /* fieldToFilter.listBeforeSelect.map((data)=>{
          return fieldToFilter.listSelect.push(data);
        })*/
        //FIltrar *pela key
      if(columFiterl){
        fieldToFilter.listSelect=fieldToFilter.listBeforeSelect.filter(l=>l.parent==columFiterl[field?.field] || 0)
      }
      }
    }catch(ex:any){
      console.warn("ERRO",ex)
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
  pattern:  string;
  type: 'text' | 'number'; // Adapte conforme necessário
  listSelect: { id: number; name: string;   parent?:number}[]; // Adapte conforme necessário
  required: boolean;
  error_required: string;
  col_md: number;
  value: number;
  isFilter: boolean;
  filterBy: string;
  listBeforeSelect?: { id: number; name: string;  parent?:number }[];
  fk?: string;
  element_type:string,

}
