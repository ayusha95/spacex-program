import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_urls } from './api_urls';

@Injectable({
    providedIn: 'root'
})
export class CommonSevice {

    headers;

    constructor(public http: HttpClient, public apiUrls: API_urls) {
        this.headers = {
            'Content-Type': 'application/json',
        }
    }

    getAllSpaceLaunches(): Observable<any>{
        return this.http.get(this.apiUrls.launch_prgms, {headers:  this.headers});
    }

    getYearSpaceLaunches(year, launch, land): Observable<any> {
        return this.http.get(this.apiUrls.all_filter + launch + '&land_success='+ land + '&launch_year='+ year, {headers: this.headers});
    }

    getLaunchSucessFilter(event): Observable<any> {
        return this.http.get(this.apiUrls.launch_success_filter + event, {headers: this.headers});
    }

    getLandSucessFilter(launchevent, landevent): Observable<any> {
        return this.http.get(this.apiUrls.land_success_filter + launchevent + '&land_success=' + landevent, {headers: this.headers});
    }
}