import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'v-rfield',
  templateUrl: './v-rfield.component.html',
  styleUrls: ['./v-rfield.component.scss'],
})
export class VRFieldComponent implements OnInit {
  @Input() propValue: string = '';
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
