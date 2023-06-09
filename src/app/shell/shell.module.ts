import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from './component/shell.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, I18nModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
