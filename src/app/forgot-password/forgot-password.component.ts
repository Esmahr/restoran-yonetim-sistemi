import { Component, OnInit } from '@angular/core';
import { RestoranYonetimiService } from '../Services/restoran-yonetimi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userData = { email: '' };

  constructor(private restoranYonetimiService: RestoranYonetimiService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.restoranYonetimiService.forgotPassword(this.userData).subscribe(
      response => {
        this.router.navigate(['/giris-yap']);
      },
      error => {
      }
    );
  }
}
