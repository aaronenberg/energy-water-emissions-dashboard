import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeoJson, Features, Geometry } from './geo-json';
import { Search } from '../facility/search';

@Injectable({
  providedIn: "root"
})
export 
class MapsService 
{
    


    public facility_geojson: GeoJson = new GeoJson();
    private huc8_geojson: string = null;
    public huc_codes: any[] = null;

    constructor(private http: HttpClient) {}

    get_facility_json(search: Search)
    {
        return this.http.get("/ewedService/getFacility/" + 
                             search.filter + "/" + search.value + "/" +
                             search.match + "/" + search.year_start + "/" +
                             search.year_end);

    }

    public format_geojson(facilities: any[]): GeoJson
    {
        this.facility_geojson.features = [];
        facilities.forEach(facility => {
            this.facility_geojson.features.push(
                new Features(
                    {
                        primary_name: facility.PRIMARY_NAME,
                        registry_id: facility.REGISTRY_ID,
                        address: facility.LOCATION_ADDRESS,
                        city: facility.CITY_NAME,
                        state: facility.STATE_NAME,
                        postal_code: facility.POSTAL_CODE,
                        huc_code: facility.DERIVED_HUC,
                        naics_code: facility.NAICS_CODE,
                        fips_code: facility.FIPS_CODE
                    },
                new Geometry('Point',
                             [Number(facility.LONGITUDE83),
                              Number(facility.LATITUDE83)])
              )
          );
      });
      return JSON.parse(JSON.stringify(this.facility_geojson));
    }

    public get_huc_codes(facilities: any[])
    {
        this.huc_codes = [];
        facilities.forEach(facility => {
            if (this.huc_codes.indexOf(facility.DERIVED_HUC) === -1) {
                this.huc_codes.push(facility.DERIVED_HUC)
            }
        });
        return this.huc_codes;
    }

    public get_huc_code(facilities: any[])
    {
        return facilities[0].DERIVED_HUC;
    }

    get_huc8_geojson(huc_code)
    {
        this.huc8_geojson = "../../assets/huc8-boundary-layers/";
        return this.http.get(this.huc8_geojson + huc_code + ".json");
    }
}
