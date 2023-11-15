import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public day: number = new Date().getUTCDay();
  public month: number = new Date().getUTCMonth();
  public anio: number = new Date().getUTCFullYear();

  constructor ( public _servicio: InfoPaginaService ) {

  }

}
