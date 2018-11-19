export class GeoJson 
{
    public type    : string;
    public bbox    : any[];
    public features: Features[];

    constructor()
    {
        this.type     = 'FeatureCollection';
        this.features = [];
    }
}

export class Features 
{
    public type      : string;
    public properties: any[];
    public geometry  : Geometry;

    constructor(properties, geometry)
    {
        this.type       = 'Feature';
        this.properties = properties;
        this.geometry   = geometry;
    }
}

export class Geometry 
{
    public type       : string;
    public coordinates: any[];

    constructor(type, coordinates)
    {
        this.type        = type;
        this.coordinates = coordinates;
    }
}
