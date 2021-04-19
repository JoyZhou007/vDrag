import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-button',
  template: `
    <button
      class="component v-button"
      [ngStyle]="vStyle"
      [class.absoulte]="absoulte"
    >
      {{ config.propValue }}
    </button>
  `,
  styleUrls: ['./v-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VButtonComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
