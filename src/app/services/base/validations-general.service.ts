import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsGeneralService {

  constructor() { }
  phoneValidationPattern() {
    return /^\+\d{1,4}\s?\d{6,14}$/;
  }
  
  emailValidationPattern() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  }
  
  //Não deve conter acentos, cedilha ~ ^ ´  eoutros. Dee ter apenas letras e hífen e espaço
  nameValidationPattern() {
    return /^[a-zA-Z-\s]+$/; // Aceita apenas letras, hífen e espaço
  }
  
}
