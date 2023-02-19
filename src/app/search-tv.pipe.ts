import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
