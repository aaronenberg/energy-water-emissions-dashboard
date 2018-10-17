import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MapsComponent } from "./maps/maps.component";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../environments/environment";
import { FacilityFormComponent } from './facility/facility-form.component';

@NgModule({
  declarations: [
      AppComponent,
      MapsComponent,
      FacilityFormComponent
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
