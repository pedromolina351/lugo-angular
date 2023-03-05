import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: any;


  constructor(private http: HttpClient){
    
  }

  ngOnInit(){
    this.http.get('././assets/data/categorias.json').subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias)
    })
  }

}
