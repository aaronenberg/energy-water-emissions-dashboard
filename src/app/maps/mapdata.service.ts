import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MapdataService {
  private url: string = "assets/FacilityCoordinates.json";

  constructor(private http: HttpClient) {}

  getGeoJson() {
    return this.http.get(this.url);
  }
}
