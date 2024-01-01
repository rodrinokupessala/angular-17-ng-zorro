import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private filteredOptionsSubject = new BehaviorSubject<any[]>([]);
  filteredOptions$: Observable<any[]> = this.filteredOptionsSubject.asObservable();

  setFilteredOptions(options: any[]): void {
    this.filteredOptionsSubject.next(options);
  }
}
