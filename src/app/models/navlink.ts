export class navlink {
  constructor(
    public text: string,
    public icon: string,
    public routerLink: string,
    public children?: navlink[],
  ){}
}