import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { HttpClientModule } from '@angular/common/http';
//#region
const list = [
  NzButtonModule,
  NzInputModule,
  NzMessageModule,
  NzLayoutModule,
  NzTabsModule,
  NzSelectModule,
  NzRadioModule,
  NzIconModule,
  NzGridModule,
  NzCollapseModule,
];
//#endregion

//#region
const common = [CommonModule, FormsModule, HttpClientModule];
//#endregion

@NgModule({
  declarations: [],
  imports: [...common, ...list],
  exports: [common, ...list],
})
export class SharedModule {}
