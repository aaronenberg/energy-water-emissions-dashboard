import { Component, OnInit } from "@angular/core";
import { MapsService } from "./maps.service";
import { MouseEvent as AGMMouseEvent } from "@agm/core";

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
    facility_geojson: Object = null;
    huc8_geojson: Object = null;
    facility_json: Object = null;

    infowinLat: number = null;
    infowinLng: number = null;
    infowinMsg: string[] = ['', '', ''];
    infowinIsOpen: boolean = false;

    constructor(private mapsService: MapsService) {}

  //get_facility_geojson(): void {
  //  this.mapsService
  //    .get_facility_geojson()
  //    .subscribe(response => (this.facility_geojson = response));
  //}

  //get_huc8_geojson(): void {
  //  this.mapsService
  //    .get_huc8_geojson()
  //    .subscribe(response => (this.huc8_geojson = response));
  //}

    //get_facility_json(): void
    //{
    //    this.mapsService.get_facility_json().subscribe(
    //        data => {this.facility_json = data.facilityData},
    //        error => console.error(error),
    //        () => console.log('done loading facilities'));
    //}

    ngOnInit() {
      //this.get_facility_geojson();
      //this.get_huc8_geojson();
        //this.get_facility_json();
    }

    facility_click_handler(event)
    {
      let position = event.feature.getGeometry();
      this.infowinLat = position.b.lat();
      this.infowinLng = position.b.lng();
      this.infowinIsOpen = true;
      //this.infowinMsg[0] = event.feature.getProperty('primaryName');
        console.log(event);
    }

    huc_click_handler(event)
    {
      //let position = event.va;
      //this.infowinLat = position.getClientX();
      //this.infowinLng = position.getClientY();
      //this.infowinIsOpen = true;
        console.log(event);
    }

    facility_style(feature) {
        return {
            clickable: true,
            visible: true,
            icon: "../../assets/powerplant.png",
            title: feature.getProperty('primaryName')
        };
    }

    huc8_style(feature) {
        return {
            clickable: true,
            visible: true,
            fillOpacity: 0.1,
            strokeOpacity: 0.3,
            strokeWeight: 2
        };
    }

    get diagnostic() { return this.facility_json; }

}
