import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-textarea',
  template: ` <textarea
    rows="1"
    style="width: 100%; height: 100%;"
    [class.absoulte]="absoulte"
    [ngStyle]="vStyle"
    nz-input
    [(ngModel)]="config.propValue"
  ></textarea>`,
  styleUrls: ['./v-textarea.component.scss'],
})
export class VTextareaComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
