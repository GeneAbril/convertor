import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total= 0;

  monedas: string [] = ['USD', 'EUR', 'LIBRA']

convertir(){
  switch(this.tengo){
    case 'USD': 
    if(this.quiero === 'USD'){
      this.total = this.cantidad;
    }
    if(this.quiero === 'EUR'){
      this.total = this.cantidad * 0.84
    }
    if(this.quiero === 'LIBRA'){
      this.total = this.cantidad * 0.75 
    }
    break;

    case 'EUR':
      if(this.quiero === 'EUR'){
this.total = this.cantidad;
      }
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.10
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * 0.86
      }
        break;

      case 'LIBRA':
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad;
      }
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.27
      }
      if(this.quiero === 'EUR'){
        this.total = this.cantidad * 1.16
      }
    
       break;

       
  }
}


}
