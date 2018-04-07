
import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('telefono') telefono: ElementRef;
  @ViewChild('mensaje') mensaje: ElementRef;


  ngAfterViewInit() {

  }
  constructor() { }

  enviar() {
  /*this.http.post('phpmailer/contacto.php', {moo: 'foo', goo: 'loo'}).subscribe(res => console.log(res.json()));*/
  console.log(this.nombre.nativeElement.value + this.email.nativeElement.value );
  }



}
