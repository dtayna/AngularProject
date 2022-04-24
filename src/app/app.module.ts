import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TabComponent } from "./components/tab.component";
import { TcontentComponent } from "./components/tcontent.component";

@NgModule({
  declarations: [AppComponent, TabComponent, TcontentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
