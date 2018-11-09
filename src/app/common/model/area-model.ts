export class AreaList {
  data?: any;
  children?: AreaList[];
}

/*export class AddTreeArea {
  id?: number;
  label?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  children?: AddTreeArea[];
  cityType?: string;
  pids?: string;
  status?: boolean;
  parent?: AddTreeArea;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
}*/
export class AddTreeItem {
  id?: number;
  areaName?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  children?: AddTreeItem[];
  pids?: string;
  cityType?: string;
  idt?: string;
  status?: boolean;
  parent?: AddTreeItem;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
}


