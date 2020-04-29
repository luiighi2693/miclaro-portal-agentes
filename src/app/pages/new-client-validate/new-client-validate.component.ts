import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from '@app/services/principal.service';

@Component({
  selector: 'app-new-client-validate',
  templateUrl: './new-client-validate.component.html',
  styleUrls: ['./new-client-validate.component.scss']
})
export class NewClientValidateComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, PrincipalService: PrincipalService) {
    PrincipalService.msn();
  }

  ngOnInit() {}
  goTo(ruta: String) {
    console.log(ruta);
    this.router.navigate(['/' + ruta], { replaceUrl: true });
  }
}
