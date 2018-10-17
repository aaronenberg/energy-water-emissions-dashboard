export class Facility 
{
    public primary_name: string;
    public registry_id : number;
    public address     : string;
    public city        : string;
    public state       : string;
    public postal_code : number;
    public fips_code   : number;
    public naics_code  : number;
    public huc_code    : number;
    public latitude    : number;
    public longitude   : number;

    constructor(primary_name,
                registry_id,  address,
                city,         state,
                postal_code,  fips_code,
                naics_code,   huc_code, 
                latitude,     longitude)
    {
        this.primary_name = primary_name;
        this.registry_id  = registry_id;
        this.address      = address;
        this.city         = city;
        this.state        = state;
        this.postal_code  = postal_code;
        this.fips_code    = fips_code;
        this.naics_code   = naics_code;
        this.huc_code     = huc_code;
        this.latitude     = latitude;
        this.longitude    = longitude;
    }
}
