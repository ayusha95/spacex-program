import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class API_urls {
    // apiUrl = "https://api.spacexdata.com/v3/launches?limit=100"

    constructor() { }

    public launch_prgms = environment.api_url + '/v3/launches?limit=100';

    public launch_success_filter = environment.api_url + '/v3/launches?limit=100&launch_success=';

    public land_success_filter = environment.api_url + '/v3/launches?limit=100&launch_success=';

    public all_filter = environment.api_url + '/v3/launches?limit=100&launch_success='

}