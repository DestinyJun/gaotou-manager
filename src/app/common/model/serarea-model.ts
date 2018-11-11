// 字段分类泛型
export class FieldType {
  categoryName?: string; // 分类名称
  sequence?: number; // 序列
  enabled?: any;
  id?: number;
  idt?: string;
  udt?: string;
}

export class AddFieldType {
  categoryName?: string; // 分类名称
  sequence?: number; // 序列
}

// 字段泛型
export class Field {
  attributeCategoryId?: number; // 属性分类id
  attributeDesc?: string; // 字段描述
  attributeName?: string; // 字段名称
  enabled?: any;
  foreignKey?: any;
  position?: number; // 字段顺序
  relatedTable?: any;
  related_column?: any;
  saOrientationFlag?: any; // 单选框(1公共2上行3下行)
  showTableHead?: any; // 是否显示在页面表单
  udt?: string;
  id?: number;
  idt?: string;
}

export class AddField {
  attributeCategoryId?: number; // 属性分类
  saOrientationFlag?: any; // 单选框(1公共2上行3下行)
  attributeName?: string; // 字段名称
  attributeDesc?: string; // 字段描述
  position?: number; // 字段顺序
  showTableHead?: any; // 是否显示在页面表单
}

// 服务区泛型
export class Serarea {
  organizationId?: number; // 机构ID
  administrativeAreaId?: number; // 区划id
  attributeValueList?: Coordinate[]; // 经纬度
  chiefUserId?: number; // 区长用户id
  createUserId?: number; // 创建用户id
  createUserName?: string; // 创建的用户名
  name?: string; // 服务区名
  status?: any; // 服务区状态
  deptId?: number; // 部门ID
  updateUserId?: number; // 修改的用户ID
  updateUserName?: string; // 修改的用户名
  id?: number; // 服务区id
  idt?: string;
  udt?: string;

}

// 经纬度
export class Coordinate {
  attributeCategoryId?: number;
  attributeDesc?: string;
  attributeName?: string;
  attributeValue?: string;
  foreignKey?: any;
  id?: number;
  position?: string;
  relatedTable?: any;
  related_column?: any;
  saAttributeId?: number;
  saOrientationFlag?: any;
  serviceAreaId?: number;
  showTableHead?: any;
}


