import { Component, OnInit } from '@angular/core';
import { RestoranYonetimiService } from '../Services/restoran-yonetimi.service'; // Doğru yolu belirtin
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = { email: '', password: '' };

  constructor(
    private restoranYonetimiService: RestoranYonetimiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.restoranYonetimiService.login(this.loginData).subscribe(
      response => {
        // İşlem başarılıysa dashboard sayfasına yönlendir
        this.router.navigate(['/dashboard']); // Dashboard sayfanızın URL'si buraya girilmelidir
      },
      error => {
        // Hata durumunda kullanıcıya uyarı göster
        alert("E-posta veya şifre hatalı!");
      }
    );
  }
}
