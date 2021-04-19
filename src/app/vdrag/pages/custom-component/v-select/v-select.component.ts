import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-select',
  templateUrl: './v-select.component.html',
  styleUrls: ['./v-select.component.scss'],
})
export class VSelectComponent implements OnInit {
  
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
