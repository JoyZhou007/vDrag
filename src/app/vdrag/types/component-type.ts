import { bField } from '../core/component/component-data.service';

export class ComponentBaseData {
  component: string; // 组件名称
  label: string; // 左侧组件列表中显示的名字
  propValue: any; // 组件所使用的值
  icon: string; // 左侧组件列表中显示的名字
  animations: any[]; // 动画列表
  events: Object; // 事件列表
  componentData: any; // 配置组件所需要的值,如下拉框的选项
  description: any; //标识
  style: ComponentBaseStyle;
  id: number;
  isBField: boolean; // 是不是bindingFields
  remoteData?: bField; // bindingFields 的值
}

export interface ComponentBaseStyle {
  width?: any;
  height?: any;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: any;
  letterSpacing?: number;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  left?: any;
  opacity?: number;
  rotate?: any;
  top?: any;
}

export interface CanvasStyleData {
  // 页面全局数据
  width: number;
  height: number;
}

export interface ComponentBasicInput {
  vStyle: Object;
  propValue: string;
}

export interface CopyData {
  data: ComponentBaseData;
  index: number;
}

export type EditModeType = 'read' | 'edit';

export interface StorageData {
  canvasData: ComponentBaseData[];
  canvasStyle: CanvasStyleData;
}
