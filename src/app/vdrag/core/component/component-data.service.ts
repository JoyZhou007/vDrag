import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import {
  CanvasStyleData,
  ComponentBaseStyle,
  ComponentBaseData,
  CopyData,
  EditModeType,
  StorageData,
} from '../../types/component-type';
import generateID from '../../utils/generateID';
import { deepCopy, swap } from '../../utils/utils';
import componentList from '../custom-component/component-list';

@Injectable({
  providedIn: 'root',
})
export class ComponentDataService {
  componentData: ComponentBaseData[] = []; // 画布组件数据
  canvasStyleData: CanvasStyleData = {
    width: 1200,
    height: 740,
  }; // 页面全局数据
  curComponent: ComponentBaseData;
  curComponentIndex: number;
  componentList: ComponentBaseData[] = componentList;
  RFieldCompnents: ComponentBaseData[] = []; // 侧边栏中的Rfields
  EFieldCompnents: ComponentBaseData[] = []; // 侧边栏中的Efields
  $shapeStyle: Subject<ComponentBaseStyle> = new Subject();
  contextmenu: {
    show: boolean;
    top: number;
    left: number;
  } = {
    show: false,
    top: 0,
    left: 0,
  }; // 右击菜单数据
  snapshotData: Array<ComponentBaseData[]> = []; // 编辑器快照数据
  snapshotIndex: number = -1; // 快照索引
  notification: Subject<{
    event: string;
    value?: any;
  }> = new Subject();
  copyData: CopyData;
  editMode: EditModeType = 'edit';
  $storageData = new Subject<StorageData>();
  constructor(private message: NzMessageService, private http: HttpClient) {
    this.initData();
    this.$shapeStyle.subscribe((x) => {
      if (x.top) this.curComponent.style.top = x.top;
      if (x.left) this.curComponent.style.left = x.left;
      if (x.width) this.curComponent.style.width = x.width;
      if (x.height) this.curComponent.style.height = x.height;
      if (x.rotate) this.curComponent.style.rotate = x.rotate;
    });
  }

  initData() {
    this.setBFields();
  }

  setBFields() {
    this.http
      .get('http://ngstest.qiusuogroup.cn:9000/api/configuration/bindingFields')
      .subscribe((x: ApiEntity) => {
        if (x.isSucceed) {
          const list: bField[] = x.data;
          //初始化RField 和 Efield
          list.forEach((x) => {
            if (x.type === 0) {
              this.RFieldCompnents.push({
                id: null,
                component: 'v-rfield',
                componentData: '',
                label: x.key,
                description: '',
                propValue: x.key,
                icon: 'icon-edit',
                animations: [],
                events: {},
                isBField: true,
                remoteData: deepCopy(x),
                style: {
                  width: 200,
                  height: 33,
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '',
                  letterSpacing: 0,
                  textAlign: '',
                  color: '',
                  borderWidth: '',
                  borderColor: '',
                  rotate: '',
                },
              });
            } else {
              this.EFieldCompnents.push({
                id: null,
                component: 'v-efield',
                componentData: '',
                label: x.key,
                description: '',
                propValue: '',
                icon: 'icon-edit',
                animations: [],
                events: {},
                isBField: true,
                remoteData: deepCopy(x),
                style: {
                  width: 200,
                  height: 100,
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '',
                  letterSpacing: 0,
                  textAlign: '',
                  color: '',
                  borderWidth: '',
                  borderColor: '',
                  rotate: '',
                },
              });
            }
          });
        }
      });
  }

  setMode(type: EditModeType) {
    this.editMode = type;
  }

  deleteCurComponent() {
    this.componentData.splice(this.curComponentIndex, 1);
  }

  hideContextMenu() {
    this.contextmenu = {
      show: false,
      top: 0,
      left: 0,
    };
  }

  upComponent() {
    // 上移图层 index，表示元素在数组中越往后
    if (this.curComponentIndex < this.componentData.length - 1) {
      swap(
        this.componentData,
        this.curComponentIndex,
        this.curComponentIndex + 1
      );
    } else {
      this.message.warning('已经到顶了');
    }
  }

  downComponent() {
    // 下移图层 index，表示元素在数组中越往前
    if (this.curComponentIndex > 0) {
      swap(
        this.componentData,
        this.curComponentIndex,
        this.curComponentIndex - 1
      );
    } else {
      this.message.warning('已经到底了');
    }
  }

  topComponent() {
    // 置顶
    if (this.curComponentIndex < this.componentData.length - 1) {
      swap(
        this.componentData,
        this.curComponentIndex,
        this.componentData.length - 1
      );
    } else {
      this.message.warning('已经到顶了');
    }
  }

  bottomComponent() {
    // 置底
    if (this.curComponentIndex > 0) {
      swap(this.componentData, this.curComponentIndex, 0);
    } else {
      this.message.warning('已经到底了');
    }
  }

  recordSnapshot() {
    // 添加新的快照
    this.snapshotData[++this.snapshotIndex] = deepCopy(this.componentData);
    // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
    if (this.snapshotIndex < this.snapshotData.length - 1) {
      this.snapshotData = this.snapshotData.slice(0, this.snapshotIndex + 1);
    }
  }

  undo() {
    if (this.snapshotIndex >= 0) {
      this.snapshotIndex--;
      this.componentData =
        deepCopy(this.snapshotData[this.snapshotIndex]) || [];
    }
  }

  redo() {
    if (this.snapshotIndex < this.snapshotData.length - 1) {
      this.snapshotIndex++;
      this.componentData =
        deepCopy(this.snapshotData[this.snapshotIndex]) || [];
    }
  }

  setShapePosStyle({ key, value }) {
    this.curComponent.style[key] = value;
  }

  copy() {
    this.copyData = {
      data: deepCopy(this.curComponent),
      index: this.curComponentIndex,
    };
  }

  paste(isMouse) {
    if (!this.copyData) {
      this.message.warning('请选择组件');
      return;
    }

    const data = this.copyData.data;

    if (isMouse) {
      data.style.top = this.contextmenu.top;
      data.style.left = this.contextmenu.left;
    } else {
      data.style.top += 10;
      data.style.left += 10;
    }

    data.id = generateID();
    this.addComponent(data);
    this.recordSnapshot();
    this.copyData = null;
  }

  addComponent(component: ComponentBaseData, index?: number) {
    if (index !== undefined) {
      this.componentData.splice(index, 0, component);
    } else {
      this.componentData.push(component);
    }
  }

  cut() {
    if (!this.curComponent) {
      this.message.warning('请选择组件');
      return;
    }

    if (this.copyData) {
      this.addComponent(this.copyData.data, this.copyData.index);
      if (this.curComponentIndex >= this.copyData.index) {
        // 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
        this.curComponentIndex++;
      }
    }
    this.copy();
    this.deleteCurComponent();
  }

  clearCanvas() {
    this.componentData = [];
  }

  restore(data?: StorageData) {
    // 用保存的数据恢复画布
    if (data) {
      this.componentData = this.resetID(data.canvasData);
      this.canvasStyleData = data.canvasStyle;
    } else {
      if (localStorage.getItem('canvasData')) {
        this.componentData = this.resetID(
          JSON.parse(localStorage.getItem('canvasData'))
        );
      }

      if (localStorage.getItem('canvasStyle')) {
        this.canvasStyleData = JSON.parse(localStorage.getItem('canvasStyle'));
      }
    }
  }

  save() {
    localStorage.setItem('canvasData', JSON.stringify(this.componentData));
    localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData));
    this.message.success('保存成功');
    this.$storageData.next({
      canvasData: this.componentData,
      canvasStyle: this.canvasStyleData,
    });
  }

  resetID(data) {
    data.forEach((item) => {
      item.id = generateID();
    });

    return data;
  }

  setEditMode(type: EditModeType) {
    this.editMode = type;
  }

  /**
   * 恢复customFields的值
   * @param list customFields
   */
  reStoreCustomFields(list: { key: string; value: string }[]) {
    list.forEach((x) => {
      this.componentData.forEach((y) => {
        if (x.key === y.label) {
          y.propValue = x.value;
        }
      });
    });
  }
}

export interface ApiEntity {
  data: any;
  isSucceed: boolean;
  message: string;
  code: string;
}

/**
 * bingFields 实体
 */
export interface bField {
  description: string;
  id: string;
  key: string;
  name: string;
  type: bFieldType;
}

type bFieldType = 0 | 1; // 0 = RField, 1 = EField
