import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): string {
    if (value === null) return '';
    if (value.length >= 100) {
      return value.slice(0, 100) + '...';
    }
    return value;
  }
}
