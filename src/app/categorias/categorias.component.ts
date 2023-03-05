import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  selectedValue: string;

  constructor(private sharedService: SharedService){
    this.selectedValue = 'a';
  }

  ngOnInit(){
    this.selectedValue = this.sharedService.selectedValue;
  }
  cargar(){
    console.log("CARGAR")

  }
}
