import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { ComponentDataService } from '../../core/component/component-data.service';
import componentList from '../../core/custom-component/component-list';
import { StorageData } from '../../types/component-type';
import generateID from '../../utils/generateID';
import { deepCopy } from '../../utils/utils';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() data: StorageData;
  constructor(public componentDataService: ComponentDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      // this.componentDataService.restore(this.data);
    }
  }

  ngOnInit(): void {}

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    let component;
    const type = e.dataTransfer.getData('type');
    switch (type) {
      case 'RFields':
        component = deepCopy(
          this.componentDataService.RFieldCompnents[
            e.dataTransfer.getData('index')
          ]
        );
        break;
      case 'EFields':
        component = deepCopy(
          this.componentDataService.EFieldCompnents[
            e.dataTransfer.getData('index')
          ]
        );
        break;
      default:
        component = deepCopy(componentList[e.dataTransfer.getData('index')]);
    }
    component.style.top = e.offsetY;
    component.style.left = e.offsetX;
    component.id = generateID();
    this.componentDataService.recordSnapshot();
    this.componentDataService.componentData.push(component);
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  deselectCurComponent() {
    this.componentDataService.curComponent = null;
    this.componentDataService.curComponentIndex = null;
    this.componentDataService.hideContextMenu();
  }
}
