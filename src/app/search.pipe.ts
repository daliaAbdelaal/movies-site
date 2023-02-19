import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(getTrendingItems:any[],searchTxt:string): any {

    return getTrendingItems.filter((item)=>{
      if(item.title)
      {
        return item.title.toLowerCase().includes(searchTxt.toLowerCase())
      }else{
        return item.name.toLowerCase().includes(searchTxt.toLowerCase())

      }

    })
  }
  

}
