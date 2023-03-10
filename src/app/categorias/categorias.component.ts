import { Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: any;
  modalRef!: BsModalRef;
  empresas: any = '';
  selectedCategoria: any = '';



  onCategoriaSelected(categoria: any) {
    this.empresas = categoria.empresas;
    this.selectedCategoria = categoria;
    console.log(this.empresas);
  }


  constructor(private http: HttpClient, private modalService: BsModalService){
    
  }

  ngOnInit(){
    this.http.get('././assets/data/categorias.json').subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
