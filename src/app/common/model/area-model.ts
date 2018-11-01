export class TreeNode {
  id?: number;
  label?: string;
  areaCode?: string;
  data?: any;
  children?: TreeNode[];
  cityType?: any;
  enabled?: boolean;
  parentId?: number;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: TreeNode;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
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
export class AreaList {
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
  administrativeAreaUnifilarDTO?: AddArea[];
}

