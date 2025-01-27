import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuComponent } from './menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MenuCardComponent, MenuComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuComponent],
})
export class MenuModule {}
