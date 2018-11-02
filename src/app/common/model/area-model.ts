export class AreaList {
  data?: any;
  children?: AreaList[];
}

export class Car {
  vin;
  year;
  brand;
  color;
}
export class AddArea {
  id?: number;
  areaName?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  administrativeAreaUnifilarDTO?: AddArea[];
  pids?: string;
  status?: boolean;
}
/*export class AreaList {
  data?: any;
  areaName?: string;
  areaCode?: string;
  enabled?: boolean;
  id?: number;
  idt?: string;
  udt?: string;
  level?: string;
  parentId?: number;
  pids?: string;
  status?: boolean;
  children?: AreaList[];
}*/

