import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-variations',
  templateUrl: './variations.page.html',
  styleUrls: ['./variations.page.scss'],
})
export class VariationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCartClick(){
    this.router.navigate(['/cart'])
  }
}

