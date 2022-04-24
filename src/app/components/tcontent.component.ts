import { Component, Input } from "@angular/core";

export interface Tcontent {
  statement: string; // conteúdo
}

@Component({
  selector: "app-tcontent",
  template: "<p>{{ statement }}</p>",
  styles: [
    `
      h2 {
        font-weight: normal;
        font-size: 20pt;
        margin-top: 0;
      }
    `
  ]
})
export class TcontentComponent {
  @Input() statement!: string; // conteúdo
}
