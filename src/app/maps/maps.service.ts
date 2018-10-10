import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MapsService {
  private url: string = "../../assets/Facility.json";

  constructor(private http: HttpClient) {}

  getGeoJson() {
    return this.http.get(this.url);
  }
}
