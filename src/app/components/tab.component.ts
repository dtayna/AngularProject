import { Component } from "@angular/core";
import { Tcontent } from "./tcontent.component";

@Component({
  selector: "app-tab",
  template: `
    <div class="tabPane">
      <h1>Tab</h1>
      <ng-template #questionBlock>
        <div class="tcontentPane">
          <div class="botoes">
            <h1>botoes aqui</h1>
          </div>
          <app-tcontent
            [statement]="tcontents[currentTcontent].statement"
          ></app-tcontent>
        </div>
      </ng-template>
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
}
