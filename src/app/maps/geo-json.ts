export class GeoJson 
{
    private type    : string;
    private bbox    : any[];
    private features: Features[];

    constructor()
    {
        this.type     = 'FeatureCollection';
        this.features = [];
    }
}

export class Features 
{
    private type      : string;
    private properties: any[];
    private geometry  : Geometry;

    constructor(properties, geometry)
    {
        this.type       = 'Feature';
        this.properties = properties;
        this.geometry   = geometry;
    }
}

export class Geometry 
{
    private type       : string;
    private coordinates: any[];

    constructor(type, coordinates)
    {
        this.type        = type;
        this.coordinates = coordinates;
    }
}
