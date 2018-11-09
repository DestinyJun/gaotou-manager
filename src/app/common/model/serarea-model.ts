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
  vin;
  year;
  brand;
  color;
}


