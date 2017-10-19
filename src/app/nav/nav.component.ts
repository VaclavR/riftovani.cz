import { NavService } from './nav.service';
import { NavItem } from './nav-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems: NavItem[];
  isCollapsed = true;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navItems = this.navService.navItems;
  }

}
