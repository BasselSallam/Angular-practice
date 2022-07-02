import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egypt'
})
export class EgyptPipe implements PipeTransform {

  transform(value: number,currentRate:number=18.5): number {
    return value * currentRate;
  }

}
