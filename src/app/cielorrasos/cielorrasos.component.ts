import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cielorrasos',
  templateUrl: './cielorrasos.component.html',
  styleUrls: ['./cielorrasos.component.css']
})
export class CielorrasosComponent implements OnInit {
  _nombre: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._nombre = this.route.snapshot.params['nombre'];
  }

}
