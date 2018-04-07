import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colocacionplacas',
  templateUrl: './colocacionplacas.component.html',
  styleUrls: ['./colocacionplacas.component.css']
})
export class ColocacionplacasComponent implements OnInit {
  _slug: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._slug = this.route.snapshot.params['slug'].replace(/-/g, ' ');
  }

}
