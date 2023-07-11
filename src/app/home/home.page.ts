import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  clickonBarkada(){
    this.router.navigate(['/barkada'])
  }
  clickonFrappuccino(){
    this.router.navigate(['/frappuccino'])
  }
  clickonExtras(){
    this.router.navigate(['/extras'])
  }
  clickonVariation(){
    this.router.navigate(['/variation'])
  }
  clickonKuchi(){
    this.router.navigate(['/kuchi'])
  }
  clickonPremier(){
    this.router.navigate(['/premier'])
  }
  clickonVariations(){
    this.router.navigate(['/variations'])
  }
  clickonHot(){
    this.router.navigate(['/hot'])
  }
}