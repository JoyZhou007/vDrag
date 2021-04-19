import { Component, Input, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/vdrag/core/component/component-data.service';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-radio',
  templateUrl: './v-radio.component.html',
  styleUrls: ['./v-radio.component.scss'],
})
export class VRadioComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  @Input() vStyle = {};
  constructor(public componentDataService: ComponentDataService) {}

  ngOnInit(): void {}
}
