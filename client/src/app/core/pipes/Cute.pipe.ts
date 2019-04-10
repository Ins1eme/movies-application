import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cute'
})

export class CutePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length >= 18) {
      value = value.substring(0, 18) + "..."
    }
    return value
  }

}