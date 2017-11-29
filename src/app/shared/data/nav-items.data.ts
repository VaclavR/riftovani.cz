import { NavItem } from '../models/nav-item.model';

export const navItems: NavItem[] = [
  {name: 'My Work', position: 'left', routerLink: 'mywork'},
  {name: 'About', position: 'left', dropdown: [
    'About Site', 'About Me', 'Help'
  ]},
  {name: 'Admin', position: 'right'}
];
