export class OrgList {
  deptCategory?: number;
  organizationName?: string; // 所属公司
  deptCode?: string; // 部门编号
  deptName?: string; // 部门名称
  description?: string;
  endFlag?: number;
  fax?: string; // 部门传真
  id?: number;
  idt?: string; // 创建时间
  organizationId?: number;
  pid?: number;
  pids?: string;
  telNumber?: string; // 部门电话
  udt?: any;
}

export class AddOrg {
  deptCategory?: boolean; // 是不是服务区
  organizationName?: string; // 所属公司
  organizationId?: number; // 所属公司得id
  deptCode?: string; // 部门编号
  deptName?: string; // 部门名称
  description?: string;
  fax?: string; // 部门传真
  pid?: number;
  pids?: string;
  telNumber?: string; // 部门电话
}

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
