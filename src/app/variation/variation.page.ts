import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.page.html',
  styleUrls: ['./variation.page.scss'],
})
export class VariationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCartClick(){
    this.router.navigate(['/cart'])
  }
}
