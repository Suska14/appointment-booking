import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(timestamp: firebase.default.firestore.Timestamp, ...args: unknown[]): string {
    const date = new Date(timestamp.seconds * 1000);
    const tzOffset = date.getTimezoneOffset() * 60000;
    const localTime = new Date(date.getTime() - tzOffset);
    return localTime.toLocaleDateString();
  }

}
