import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  // como se va a ocupar hacer peticiones http a firebase
  constructor( private http: HttpClient) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise<void>( (resolve, reject)  => {

      this.http.get('https://angular-html-f6e78-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: ProductoInterface[] | any ) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });



  };

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-f6e78-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        //ejecutar después de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos ( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }

    })

  }

}
