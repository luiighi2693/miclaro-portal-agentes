import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clasification-credit',
  templateUrl: './clasification-credit.component.html',
  styleUrls: ['./clasification-credit.component.scss']
})
export class ClasificationCreditComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goTo(ruta: String) {
    console.log(ruta);
    this.router.navigate(['/' + ruta], { replaceUrl: true });
  }
}
