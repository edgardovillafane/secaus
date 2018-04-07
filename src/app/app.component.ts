import { REVESTIMIENTOS, CIELORRASOS } from './mock-modelos';
import { Component, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
  title = 'Seca Construcciones';
  modelosre = REVESTIMIENTOS;
  modelosci = CIELORRASOS;
  onTabChange(ruta) {
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(ruta);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl('/home').then(
        () => {
          this.router.navigateByUrl(ruta);
        });
    }
  }

}




