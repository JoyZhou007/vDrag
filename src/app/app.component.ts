import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ApiEntity,
  ComponentDataService,
} from './vdrag/core/component/component-data.service';
import { StorageData } from './vdrag/types/component-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'visual-drag-demo';
  data: StorageData = {
    canvasData: null,
    canvasStyle: null,
  };
  constructor(
    private http: HttpClient,
    private componentDataService: ComponentDataService
  ) {
    this.http
      .get(
        'http://ngstest.qiusuogroup.cn:9000/api/report/report?id=19d77db9-5157-4e92-9c0a-fe52c0b99512',
        {
          headers: {
            Authorization: `fb76831507df40d392e6d93956934a73`,
          },
        }
      )
      .subscribe((x: ApiEntity) => {
        if (x.isSucceed) {
          this.data.canvasData = JSON.parse(x.data.template.content).canvasData;
          this.data.canvasStyle = JSON.parse(
            x.data.template.content
          ).canvasStyle;
          this.componentDataService.restore(this.data);
          this.componentDataService.reStoreCustomFields(x.data.customFields);
          this.getBindingFields();
        }
      });
    // if (localStorage.getItem('canvasData')) {
    //   this.data.canvasData = JSON.parse(localStorage.getItem('canvasData'));
    // }

    // if (localStorage.getItem('canvasStyle')) {
    //   this.data.canvasStyle = JSON.parse(localStorage.getItem('canvasStyle'));
    // }
  }

  getBindingFields() {
    const bFields = this.componentDataService.componentData.filter(
      (x) => x.remoteData && x.remoteData.type === 0
    );
    let bindingFields = bFields.map((x) => x.remoteData.key);
    this.http
      .post(
        'http://ngstest.qiusuogroup.cn:9000/api/report/bindingFields',
        {
          bindingFields,
          registrationId: '19d77db9-5157-4e92-9c0a-fe52c0b99512',
          reportId: 'e052db19-8cfc-4419-9638-2a963a44a8a3',
        },
        {
          headers: {
            Authorization: `fb76831507df40d392e6d93956934a73`,
          },
        }
      )
      .subscribe((x: ApiEntity) => {
        if (x.isSucceed) {
          x.data.forEach((e) => {
            for (let index = 0; index < bFields.length; index++) {
              const element = bFields[index];
              if (element.remoteData.key === e.key) {
                element.propValue = e.value;
                break;
              }
            }
          });
        }
      });
  }

  onDataSave(data: StorageData) {
    console.log(data);
  }
}
