import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuarios: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('././assets/data/usuarios.json').subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    })
  }
}
