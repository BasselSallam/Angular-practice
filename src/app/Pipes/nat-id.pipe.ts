import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'natID'
})
export class NatIDPipe implements PipeTransform {

  transform(value: string): Date {
    '29909011509345'
    '0123456789'
    // console.log(value);
    // let newDate = value.slice(1,7);
    // console.log((newDate));
    // console.log(typeof(newDate));
   let d = new Date ();
  //  console.log(newDate.slice(0,2));
  //  d.setDate(parseInt(newDate.slice(5,6)))
  //  d.setMonth(parseInt(newDate.slice(3,4)))
  //  d.setFullYear(1900+parseInt(newDate.slice(1,2)))
   console.log(d)
   return d;
  }

}
