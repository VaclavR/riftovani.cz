export class NavItem {
    constructor(
        public name: string,
        public position: string,
        public routerLink?: string,
        public dropdown?: string[]
    ) {}
}
