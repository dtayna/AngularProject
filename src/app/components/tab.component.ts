import { Component } from "@angular/core";
import { Tcontent } from "./tcontent.component";

@Component({
  selector: "app-tab",
  template: `
    <div class="tabPane">
      <div class="botoes">
        <button class="b" (click)="select(0)">
          Tab 1
        </button>
        <button class="b" (click)="select(1)">
          Tab 2
        </button>
        <button class="b" (click)="select(2)">
          Tab 3
        </button>
        <button class="b" (click)="select(3)">
          Tab 4
        </button>
      </div>
      <div class="tcontentPane">
        <app-tcontent
          [statement]="tcontents[currentTcontent].statement"
        ></app-tcontent>
      </div>
    </div>
  `,
  styles: [
    `
      .tabPane {
        padding: 50px;
      }
      .tcontentPane {
        padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
        border: 1px solid #aaa;
        background-color: #f0f0f0;
      }
      .b {
        margin: 10px;
      }
    `
  ]
})
export class TabComponent {
  tcontents: Tcontent[] = [
    {
      statement: "Conteúdo 1111111"
    },
    {
      statement: "Conteúdo 2222222"
    },
    {
      statement: "Conteúdo 33333333"
    },
    {
      statement: "Conteúdo 44444444"
    }
  ];
  currentTcontent = 0;

  select(optionIndex: number) {
    this.currentTcontent = optionIndex;
  }
}
