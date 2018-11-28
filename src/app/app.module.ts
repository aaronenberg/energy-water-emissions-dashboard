import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../environments/environment";
import { SearchFormComponent } from './facility/search-form.component';

@NgModule({
  declarations: [
      AppComponent,
      SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
