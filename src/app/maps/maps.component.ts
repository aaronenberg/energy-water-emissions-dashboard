import { Component, OnInit } from "@angular/core";
import { MapsService } from "./maps.service";
//import { MouseEvent as AGMMouseEvent } from "@agm/core";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"],
  providers: [MapsService]
})
export class MapsComponent implements OnInit {
  lat: number = 39.8;
  lng: number = -98.5;
  zoom: number = 5;
  geoJsonObject: Object = null;

  infowinLat: number = null;
  infowinLng: number = null;
  infowinMsg: string[] = ['', '', ''];
  infowinIsOpen: boolean = false;

  constructor(private mapsService: MapsService) {}

  getGeoJson(): void {
    this.mapsService
      .getGeoJson()
      .subscribe(geoJsonResponse => (this.geoJsonObject = geoJsonResponse));
  }

  ngOnInit() {
      this.getGeoJson();
  }

  clickHandler(event: AGMMouseEvent) {
    //this.infowinLat = event.coords.lat;
    //this.infowinLng = event.coords.lng;
    console.log(event);
  }

  styleFunc(feature) {
    return {
      clickable: true,
      visible: true,
      icon: "../../assets/powerplant.png",
      title: feature.getProperty('primaryName')
    };
  }
}
