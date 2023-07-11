import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCartClick(){
    this.router.navigate(['/cart'])
  }
}
