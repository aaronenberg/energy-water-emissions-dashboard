import { Component } from '@angular/core';
import { Facility } from './facility';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.css']
})
export 
class FacilityFormComponent 
{
    public submitted: boolean;
    public model = new Facility('PROVIDENCE POWER LANDFILL GAS PWR PLANT',
                                 110000820078,
                                 '65 SHUN PIKE',
                                 'JOHNSTON',
                                 'RHODE ISLAND', 
                                 2919, 
                                 44007,
                                 221119,
                                 1090004,
                                 -71.52981,
                                 41.80294);

    constructor()
    { 
        this.submitted = false;
    }

    onSubmit()
    {
        this.submitted = true; 
    }

    get diagnostic()
    {
        return JSON.stringify(this.model);
    }
}
