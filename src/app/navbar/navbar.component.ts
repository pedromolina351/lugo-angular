import { Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from '../shared.service';

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
  usuarioActual: any;

  /*ngOnInit() {
    this.http.get('././assets/data/usuarios.json').subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    })
  }*/

  constructor(private http: HttpClient, private modalService: BsModalService, private servicioCompartido: SharedService) {
    this.http.get('././assets/data/usuarios.json').subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
      this.usuarioSeleccionado = this.usuarios[0].nombre; 
      this.mostrarUsuario();
    })
    
  }

  mostrarUsuario(){
    this.usuarios.forEach((element: { nombre: any; }) => {
      if(element.nombre == this.usuarioSeleccionado){
        this.usuarioActual = element;
        console.log(this.usuarioActual);
        this.servicioCompartido.disparadorDeUsuario.emit({
          data: this.usuarioActual
        })
      }
    });
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
