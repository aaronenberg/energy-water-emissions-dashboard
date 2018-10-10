import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MapsComponent } from "./maps/maps.component";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, MapsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
