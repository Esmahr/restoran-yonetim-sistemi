import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eat-card',
  templateUrl: './eat-card.component.html',
  styleUrls: ['./eat-card.component.scss']
})
export class EatCardComponent{
  isActive: boolean = true;

  @Input() isim : string = "";
  @Input() kategori : string = "";
  @Input() detay: string = "";
  @Input() fiyat : string = "";

}

