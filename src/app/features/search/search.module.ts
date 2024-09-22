import { SearchService } from './../../services/search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, NzInputModule, FormsModule, NzSelectModule, NzButtonModule],
  exports: [SearchComponent]
})
export class SearchModule {}
