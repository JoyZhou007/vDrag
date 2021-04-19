import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-table',
  templateUrl: './v-table.component.html',
  styleUrls: ['./v-table.component.scss'],
})
export class VTableComponent implements OnInit {
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  @Input() config: ComponentBaseData;
  constructor() {}

  ngOnInit(): void {}
}
