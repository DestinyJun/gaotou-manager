export class Car {
  vin;
  year;
  brand;
  color;
}

export class Cash {
  administrativeAreaId?: number;
  cashRegisterCode?: string;
  enabled?: boolean;
  idt?: string;
  saOrientationId?: number;
  serviceAreaId?: number;
  storeId?: number;
  udt?: any;
}

export class TreeNode {
  id?: number;
  label?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  children?: TreeNode[];
  cityType?: string;
  pids?: string;
  status?: boolean;
  parent?: TreeNode;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
}
