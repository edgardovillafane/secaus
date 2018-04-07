
import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-consultaporobra',
  templateUrl: './consultaporobra.component.html',
  styleUrls: ['./consultaporobra.component.css']
})
export class ConsultaporobraComponent implements AfterViewInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('telefono') telefono: ElementRef;
  @ViewChild('zona') zona: ElementRef;
  @ViewChild('mensaje') mensaje: ElementRef;
  constructor() { }
  ngAfterViewInit() {

  }


}
