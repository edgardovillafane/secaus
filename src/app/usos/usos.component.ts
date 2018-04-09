import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-usos',
  templateUrl: './usos.component.html',
  styleUrls: ['./usos.component.css']
})

export class UsosComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ListOfContent;

  ngOnInit() {
    this.contentService.CrudFunction(1,0,'','','','')
    .map((response) => response.json())
    .subscribe((data) => { 
      this.ListOfContent = data;
    });
  }
  
}
