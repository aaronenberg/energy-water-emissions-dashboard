import { Component, OnInit } from "@angular/core";
import { MapdataService } from "./mapdata.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
  //providers: [MapdataService]
})
export class MapsComponent implements OnInit {
  lat: number = 39.8;
  lng: number = -98.5;
  zoom: number = 5;

  geoJsonObject: Object = {
    type: "FeatureCollection",
    features: [
      {
        geometry: {
          coordinates: [40.851715, -74.423751],
          type: "Point"
        },
        type: "Feature",
        properties: {
          primaryName: "ZIMMER TRABECULAR METAL TECHNOLOGY"
        }
      },
      {
        geometry: {
          coordinates: [42.885697, -76.966116],
          type: "Point"
        },
        type: "Feature",
        properties: {
          primaryName: "ZOTOS INTERNATIONAL"
        }
      }
    ]
  };
  constructor(private mapDataService: MapdataService) {}
  //getGeoJson(): void {
  //  this.mapDataService
  //    .getGeoJson()
  //    .subscribe(geoJsonResponse => (this.geoJsonObject = geoJsonResponse));
  //}
  ngOnInit() {
    //  this.getGeoJson();
  }
  clickHandler(clickEvent) {
    console.log(clickEvent);
  }
  styleFunc() {
    return {
      clickable: false,
      fillColor: "red",
      strokeWeight: 1
    };
  }
}
