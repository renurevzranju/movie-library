import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  title: string = "";

  constructor(private navbarService: NavbarService, public router: Router){}

  ngOnInit(): void {
    this.navbarService.title.subscribe(title => this.title = title);
  }
}
