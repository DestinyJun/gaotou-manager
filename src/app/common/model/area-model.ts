export interface Car {
  vin;
  year;
  brand;
  color;
}
export interface TreeNode {
  data?: any;
  children?: TreeNode[];
  leaf?: boolean;
  expanded?: boolean;
}
export interface AreaTree {
  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  administrativeAreaTree?: AreaTree[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: AreaTree;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
}


