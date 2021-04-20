import { NgModule } from '@angular/core';
import { NgxVisualDragComponent } from './ngx-visual-drag.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { ComponentListComponent } from './pages/component-list/component-list.component';
import { EditorComponent } from './pages/editor/editor.component';
import { ShapeComponent } from './pages/editor/shape/shape.component';
import { VButtonComponent } from './pages/custom-component/v-button/v-button.component';
import { ContextMenuComponent } from './pages/editor/context-menu/context-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarklineComponent } from './pages/editor/markline/markline.component';
import { AttrListComponent } from './pages/attr-list/attr-list.component';
import { PreviewComponent } from './pages/editor/preview/preview.component';
import { ComponentWrapperComponent } from './pages/editor/component-wrapper/component-wrapper.component';
import { VTextComponent } from './pages/custom-component/v-text/v-text.component';
import { VRadioComponent } from './pages/custom-component/v-radio/v-radio.component';
import { VTableComponent } from './pages/custom-component/v-table/v-table.component';
import { VTextareaComponent } from './pages/custom-component/v-textarea/v-textarea.component';
import { VPictureComponent } from './pages/custom-component/v-picture/v-picture.component';
import { VSelectComponent } from './pages/custom-component/v-select/v-select.component';
import { VAlbumComponent } from './pages/custom-component/v-album/v-album.component';
import { VRFieldComponent } from './pages/custom-component/v-rfield/v-rfield.component';
import { VEFieldComponent } from './pages/custom-component/v-efield/v-efield.component';

@NgModule({
  declarations: [
    NgxVisualDragComponent,
    HomeComponent,
    ToolbarComponent,
    ComponentListComponent,
    EditorComponent,
    ShapeComponent,
    VButtonComponent,
    ContextMenuComponent,
    MarklineComponent,
    AttrListComponent,
    PreviewComponent,
    ComponentWrapperComponent,
    VTextComponent,
    VRadioComponent,
    VTableComponent,
    VTextareaComponent,
    VPictureComponent,
    VSelectComponent,
    VAlbumComponent,
    VRFieldComponent,
    VEFieldComponent,
  ],
  imports: [BrowserAnimationsModule, SharedModule],
  exports: [NgxVisualDragComponent],
})
export class NgxVisualDragModule {}
