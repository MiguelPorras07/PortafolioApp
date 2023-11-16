import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];

  // como se va a ocupar hacer peticiones http a firebase
  constructor( private http: HttpClient) {

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get('https://angular-html-f6e78-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: ProductoInterface[] | any ) => {

        console.log(resp);

        this.productos = resp;

        setTimeout(() => {
          this.cargando = false;
        }, 1000);

      })

  }

}
