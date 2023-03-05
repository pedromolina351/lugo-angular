import { Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuarios: any;
  ordenesUsuario: any;
  usuarioSeleccionado: any;
  modalRef!: BsModalRef;

  constructor(private http: HttpClient, private modalService: BsModalService) {}

  ngOnInit() {
    this.http.get('././assets/data/usuarios.json').subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

    this.usuarios.forEach((element: { ordenes: any, nombre:any; }) => {
        if(element.nombre == this.usuarioSeleccionado){
          console.log(element.ordenes);
          this.ordenesUsuario = element.ordenes;
        }
    });
  }
}
