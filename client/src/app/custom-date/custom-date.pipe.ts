import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  transform(value: Date | string, ...args: unknown[]): string {
    const date = new Date(value);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = this.months[monthIndex];
    return day + this.getOrdinal(day) + ' ' + month;
  }

  getOrdinal (num: number) {
    switch (num % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
