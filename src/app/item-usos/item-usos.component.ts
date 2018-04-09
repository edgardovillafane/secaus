import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-item-usos',
  templateUrl: './item-usos.component.html',
  styleUrls: ['./item-usos.component.css']
})
export class ItemUsosComponent implements OnInit {

  List;
  ListSelect;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usoService: ContentService 
  ) { }

  ngOnInit() {
    this.usoService.CrudFunction(1,0,'','','','')
    .map((response) => response.json())
    .subscribe((data) => { 
      this.List = data;
      this.getUso(this.List);
    });
    this.route.snapshot.params['slug'].replace(/-/g,' ');
  }
 
  getUso(json): void {
    const name = this.route.snapshot.paramMap.get('nombre');
    this.usoService.getJsonForName(name,json)
    .subscribe(resultado => this.ListSelect = resultado);
  }

}
