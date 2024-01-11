import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Kullanıcı giriş durumunu localStorage üzerinden kontrol ediyoruz
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      // Kullanıcı giriş yapmamışsa, giriş sayfasına yönlendir
      this.router.navigate(['/login']);
      return false;
    }

    // Kullanıcı giriş yapmışsa, rota erişimine izin ver
    return true;
  }
}
