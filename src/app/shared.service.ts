import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedValue: string = 'Hola';

  constructor() { }
}
