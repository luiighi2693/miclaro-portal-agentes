import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-pay-income',
  templateUrl: './confirmation-pay-income.component.html',
  styleUrls: ['./confirmation-pay-income.component.scss']
})
export class ConfirmationPayIncomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goTo(ruta: String) {
    console.log(ruta);
    this.route.navigate(['/' + ruta], { replaceUrl: true });
  }
}
