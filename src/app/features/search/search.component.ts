import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keysearch: string = '';
  public sizeImg: string = '256x256';
  public sizeImgList = [
    {
      value: '256x256',
      label : '256x256 px'
    },
    {
      value: '512x512',
      label : '512x512 px'
    },
    {
      value: '11024x1024',
      label : '1024x1024 px'
    }
  ]
  public resImg=  '';
  constructor(private _searchService:SearchService, private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  public genImg() {
    const imgNotFound= 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
    this._searchService.generateImage(this.keysearch, this.sizeImg).then(res => {
      if(res && res.data && res.data.length ) {
        this.resImg = res.data[0].url || imgNotFound
      } else {
        this.notification.error('Thông báo', 'Không thể tạo được hình ảnh, vui lòng nhập lại thông tin');
      }
    })
  }

}
