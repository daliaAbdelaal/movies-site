import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingpeople:any[]=[]

  getTrendingpeople()
  {
    this._TrendingService.getTrending("person").subscribe((response)=>{

      this.trendingpeople=response.results;
      })
  }
  ngOnInit(): void {
    this.getTrendingpeople()
  }

}
