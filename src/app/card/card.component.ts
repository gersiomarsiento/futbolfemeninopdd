import { Component, OnInit, Input } from '@angular/core';
// import { ServicioContratacionService } from '../servicio-contratacion.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() dataEntry:any;
  ngOnInit(): void {
    
  }    
  // @Input() dataEntry:any;
  // public image!:string;

  // constructor(private servicioContratacion:ServicioContratacionService){ }
  
  // ngOnInit(): void { }

  // contratarJugadora(event:Event){
  //   event.stopPropagation();
  //   this.servicioContratacion.disparadorContratacion.emit({
  //     data:this.dataEntry
  //   })
  // }
}
