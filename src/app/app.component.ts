import { Component } from '@angular/core';
import { CommonSevice } from './services/common_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  launch_year = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  successful_launch = ['true','false'];
  successful_landing = ['true','false'];
  launches:any = {};
  showloader: boolean;

  constructor(public service: CommonSevice){}

  ngOnInit(){
    this.launch_data();
  }

  launch_data() {
    this.showloader = true;
    this.service.getAllSpaceLaunches().subscribe((res:any) => {
      this.showloader = false;
      this.launches = res;
      // console.log('All Space Launches', this.launches);
    });
  }

  year_click(year) {
    let land = true;
    let launch = true;
    this.showloader = true;
    this.service.getYearSpaceLaunches(year, land, launch).subscribe((res:any) => {
      // console.log('When Year Filter is applied', res);
      this.showloader = false;
      this.launches = res;
    });
  }

  successLaunch: boolean = true;
  launch_success(event) {
    // console.log(event);
    this.successLaunch = event;
    this.showloader = true;
    this.service.getLaunchSucessFilter(event).subscribe((res:any) => {
      // console.log('When Succes Launch filter is applied', res);
      this.showloader = false;
      this.launches = res;
    });
  }

  launch_land(event) {
    this.showloader = true;
    // console.log(this.successLaunch);
    this.service.getLandSucessFilter(this.successLaunch, event).subscribe((res: any) => {
      // console.log('When Success Laund and Success Land filter is applied', res);
      this.showloader = false;
      this.launches = res;
    });
  }
}
