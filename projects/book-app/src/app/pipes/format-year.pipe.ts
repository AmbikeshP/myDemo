import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatYear'
})
export class FormatYearPipe implements PipeTransform {

  transform(value: number): string {
    return `Year: ${value}`;
  }

}
