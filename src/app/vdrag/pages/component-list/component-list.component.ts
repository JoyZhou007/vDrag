import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../../core/component/component-data.service';
import list from '../../core/custom-component/component-list';

@Component({
  selector: 'component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  componentList = list;
  constructor(public componentDataService: ComponentDataService) {}

  ngOnInit(): void {}

  handleDragStart(e) {
    e.dataTransfer.setData('index', e.target.dataset.index);
    e.dataTransfer.setData('type', e.target.dataset.type);
  }
}
