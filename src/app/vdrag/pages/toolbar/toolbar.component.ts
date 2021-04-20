import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ComponentDataService } from '../../core/component/component-data.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  isShowPreview: boolean = false;
  name: string;
  constructor(
    public componentDataService: ComponentDataService,
    private message: NzMessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  redo() {
    this.componentDataService.redo();
  }

  undo() {
    this.componentDataService.undo();
  }

  save() {
    this.componentDataService.save();
    const content = {
      canvasData: this.componentDataService.componentData,
      canvasStyle: this.componentDataService.canvasStyleData,
    };
    const formData = {
      id: '0ef0af0a-12f6-48be-837f-70e9efd9c7e0',
      type: 3,
      name: '青光眼筛查报告',
      description: '青光眼筛查报告',
      content: JSON.stringify(content),
    };
    this.http
      .post(
        'http://ngstest.qiusuogroup.cn:9000/api/configuration/template',
        formData
      )
      .subscribe();
  }

  clearCanvas() {
    this.componentDataService.clearCanvas();
  }

  preview() {
    this.isShowPreview = true;
    this.componentDataService.setEditMode('read');
  }

  closePreview() {
    this.isShowPreview = false;
  }
}
