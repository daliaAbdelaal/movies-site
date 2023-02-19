import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  imgPath:any='https://image.tmdb.org/t/p/original/'
  type:any;
  id:any;
  itemDetails:any;
  constructor(_ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService) {
    this.type=_ActivatedRoute.snapshot.paramMap.get('type');
    this.id=_ActivatedRoute.snapshot.paramMap.get('id');
    // alert(this.type)

   }
   detailsData()
   {
      return this._TrendingService.getDetails(this.type,this.id).subscribe((resp)=>{
        this.itemDetails=resp;
      })
   }

  ngOnInit(): void {
    this.detailsData()
  }

}
