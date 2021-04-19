import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentDataService } from '../../core/component/component-data.service';
import {
  ComponentBaseData,
  ComponentBaseStyle,
} from '../../types/component-type';
import getStyle from '../../utils/style';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit {
  isEdit: boolean = true;
  constructor(public componentDataService: ComponentDataService) {}

  ngOnInit(): void {}

  handleContextMenu(e) {
    e.stopPropagation();
    e.preventDefault();
    // 计算菜单相对于编辑器的位移
    let target = e.target;
    let top = e.offsetY;
    let left = e.offsetX;
    while (!target.className.includes('editor')) {
      left += target.offsetLeft;
      top += target.offsetTop;
      target = target.parentNode;
    }
    this.componentDataService.contextmenu = {
      show: true,
      top,
      left,
    };
  }

  getComponentStyle(style: ComponentBaseStyle) {
    return getStyle(style, ['top', 'left', 'width', 'height', 'rotate']);
  }

  handleInput(data: { style: object; value: string }, item: ComponentBaseData) {
    item.propValue = data.value;
    // // 根据文本组件高度调整 shape 高度
    this.componentDataService.$shapeStyle.next({
      height: this.getTextareaHeight(data.style, data.value),
    });
  }

  getTextareaHeight(style, text) {
    let {
      lineHeight,
      fontSize,
      height,
    } = this.componentDataService.curComponent.style;
    if (lineHeight === '') {
      lineHeight = 1.5;
    }

    const newHeight = text.split('\n').length * lineHeight * fontSize;
    return height > newHeight ? height : newHeight;
  }
}
