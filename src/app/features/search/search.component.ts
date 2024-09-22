import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private _searchService:SearchService) { }

  ngOnInit(): void {
  }

  public genImg() {
    this._searchService.generateImage(this.keysearch, this.sizeImg).then(res => {
      if(res) {
        console.log(res);
      }
    })
  }

}
