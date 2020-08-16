import { Pipe, PipeTransform } from '@angular/core';
import {humanize} from './string-util';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return humanize(value);
  }
}
