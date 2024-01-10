import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-card',
  templateUrl: './eat-card.component.html',
  styleUrls: ['./eat-card.component.scss']
})
export class EatCardComponent implements OnInit {
  isActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

