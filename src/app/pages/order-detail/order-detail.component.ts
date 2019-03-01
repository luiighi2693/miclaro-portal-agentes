import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  goTo(ruta: String) {
    console.log(ruta);
    this.route.navigate(['/' + ruta], { replaceUrl: true });
  }
}
