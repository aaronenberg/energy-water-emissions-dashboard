import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export 
class MapsService 
{
  private facility_geojson: string = "../../assets/Facility.json";
  private huc8_geojson: string = "../../assets/huc8.json";

  constructor(private http: HttpClient) {}

  get_facility_geojson()
  {
    return this.http.get(this.facility_geojson);
  }

  get_huc8_geojson()
  {
    return this.http.get(this.huc8_geojson);
  }
}
