import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ComponentDataService } from '../../../core/component/component-data.service';

@Component({
  selector: 'v-text',
  templateUrl: './v-text.component.html',
  styleUrls: ['./v-text.component.scss'],
})
export class VTextComponent implements OnInit {
  @Input() propValue: string = '';
  @Input() vStyle = {};
  @Input() absoulte: boolean = false; //preview 模式控制样式浮动
  isEdit: boolean = true;
  @Output() OutInput = new EventEmitter<{
    style: object;
    value: string;
  }>();
  constructor(public componentDataService: ComponentDataService) {}

  ngOnInit(): void {}

  handleInput() {
    this.OutInput.emit({
      style: this.vStyle,
      value: this.propValue,
    });
  }
}
