import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
   
    return value.slice(0,4)+'-'+value.slice(5,9)+'-'+value.slice(10,14)+'-'+value.slice(15,19);
  }

}
