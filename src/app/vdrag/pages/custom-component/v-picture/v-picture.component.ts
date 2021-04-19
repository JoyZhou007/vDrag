import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-picture',
  template: ` <img
    [src]="config.propValue"
    alt=""
    [class.absoulte]="absoulte"
    [ngStyle]="vStyle"
  />`,
  styleUrls: ['./v-picture.component.scss'],
})
export class VPictureComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
