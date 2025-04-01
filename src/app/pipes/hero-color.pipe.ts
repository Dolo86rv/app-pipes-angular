import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  //Mi solucion
  /*transform(value: number): string {
    console.log(value);
    switch (value) {
      case 0: // red
        return 'Red';
      case 1: // black
        return 'Black';
      case 2: // blue
        return 'Blue';
      case 3: // green
        return 'Green';
      default: // unknown color
        return 'Unknown Color';
    }
  }*/

  transform(value: Color): string {
      return Color[value];
    }
}
