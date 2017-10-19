import { NavItem } from './nav-item.model';
export class NavService {
    navItems: NavItem[] = [
        {name: 'Home', position: 'left'},
        {name: 'My Work', position: 'left'},
        {name: 'About', position: 'left', dropdown: [
            'About Me', 'About Site', 'Contact'
        ]},
        {name: 'Login', position: 'right'},
        {name: 'Register', position: 'right'}
    ];
}