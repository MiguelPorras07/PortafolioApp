import { Router } from '@angular/router';
import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  buscarProducto( termino: string ) {

    if ( termino.length < 1 ) {
      return;
    }



    this.router.navigate(['/search', termino]);


  }
}
