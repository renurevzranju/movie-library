import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return "rating: " + value +"/5";
  }

}
