import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-efield',
  templateUrl: './v-efield.component.html',
  styleUrls: ['./v-efield.component.scss'],
})
export class VEFieldComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
