import { Component, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: any;
  usuarios: any;
  modalRef!: BsModalRef;
  empresas: any = '';
  selectedCategoria: any = '';
  producto: any = '';
  usuarioActual: any = '';
  cantidadPedido: number = 1;




  onCategoriaSelected(categoria: any) {
    this.empresas = categoria.empresas;
    this.selectedCategoria = categoria;
    console.log(this.empresas);
  }

  onProductoSelected(producto: any){
    this.producto = producto;
    console.log(this.producto);
  }
  constructor(private http: HttpClient, private modalService: BsModalService, private servicioCompartido: SharedService){
    
  }

  ngOnInit(){
    this.cargarCategorias();
    this.cargarUsuarios();
    this.servicioCompartido.disparadorDeUsuario.subscribe(data => {
      console.log("Recibiendo data: ",data)
      this.usuarioActual = data.data;
    })
  }

  cargarCategorias(){
    this.http.get('././assets/data/categorias.json').subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias)
    })
  }

  cargarUsuarios(){
    this.http.get('././assets/data/usuarios.json').subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    })
  }

  crearPedido(producto: any, cantidad: any){
    const nuevaOrden = {
      nombreProducto: producto.nombreProducto,
      descripcion: producto.descripcion,
      cantidad: cantidad,
      precio: (producto.precio * cantidad)
    }
    this.usuarioActual.ordenes.push(nuevaOrden);
    console.log(this.usuarioActual);
    this.cantidadPedido = 1;

  }

  guardarUsuariosJson() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('././assets/data/usuarios.json', JSON.stringify(this.usuarios), { headers }).subscribe(response => {
      console.log('Los datos se han guardado correctamente');
    }, error => {
      console.error('Ha ocurrido un error al guardar los datos', error);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalPedir(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

}
