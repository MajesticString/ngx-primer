import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box.component';
import { BoxHeaderComponent } from './box-header/box-header.component';
import { BoxTitleComponent } from './box-title/box-title.component';
import { BoxBodyComponent } from './box-body/box-body.component';
import { BoxFooterComponent } from './box-footer/box-footer.component';
import { BoxRowComponent } from './box-row/box-row.component';



@NgModule({
  declarations: [
    BoxComponent,
    BoxHeaderComponent,
    BoxTitleComponent,
    BoxBodyComponent,
    BoxFooterComponent,
    BoxRowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoxModule { }
