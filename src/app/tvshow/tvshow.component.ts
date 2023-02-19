import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingTvshows:any[]=[];

  getTrendingTv()
  {
    this._TrendingService.getTrending("tv").subscribe((response)=>{

      this.trendingTvshows=response.results;
      })
  }
  ngOnInit(): void {
    this.getTrendingTv()
  }

}
