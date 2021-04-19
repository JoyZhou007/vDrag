import { Component, Input, OnInit } from '@angular/core';
import { ComponentBaseData } from 'src/app/vdrag/types/component-type';

@Component({
  selector: 'v-album',
  templateUrl: './v-album.component.html',
  styleUrls: ['./v-album.component.scss'],
})
export class VAlbumComponent implements OnInit {
  @Input() config: ComponentBaseData;
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  constructor() {}

  ngOnInit(): void {}
}
