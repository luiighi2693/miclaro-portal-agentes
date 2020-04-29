import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  constructor(private router: Router) {
    console.log('.::PrincipalService::.');
  }
  public msn(): void {
    console.log('welcome');
  }

  public goTo(ruta: String) {
    console.log(ruta);
    this.router.navigate(['/' + ruta], { replaceUrl: true });
  }
}
