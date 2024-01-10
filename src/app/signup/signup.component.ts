import { Component } from '@angular/core';
import { RestoranYonetimiService } from '../Services/restoran-yonetimi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupData = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  constructor(private restoranYonetimiService: RestoranYonetimiService) { }

  onSubmit(): void {
    // Burada form verilerini gönderme işlemini yapacağız.
    const data = {
      firstName: this.signupData.fname,
      lastName: this.signupData.lname,
      email: this.signupData.email,
      password: this.signupData.password
    };

    this.restoranYonetimiService.signup(data).subscribe(
      response => {
        console.log('Kayıt başarılı!', response);
      },
      error => {
        console.error('Kayıt sırasında bir hata oluştu', error);
      }
    );
  }
}
