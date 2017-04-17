export enum DashboardItemType {
  User,
  Client
}

export interface IDashboardItem {
  text: string,
  path: string,
  icon: string,
  type: DashboardItemType
}
