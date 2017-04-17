import { Pipe, PipeTransform } from '@angular/core';
import { DashboardItemType } from '../models/dashboardItem.model';

@Pipe({
  name: 'dashboardFilter',
  pure: false
})
export class DashboardFilterPipe implements PipeTransform {
  transform(items: any, ...args: any[]) {
    return items.filter(item => item.type === args[0].type);
  }
}
