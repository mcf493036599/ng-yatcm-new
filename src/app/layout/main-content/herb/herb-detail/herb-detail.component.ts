import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../../services/rest/rest.service';
import {GlobalService} from '../../../../services/global/global.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Herb} from '../../../../yatcm/models/herb';
import {Compound} from '../../../../yatcm/models/compound';
import {PageMeta} from '../../../../yatcm/models/page-meta';
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-herb-detail',
  templateUrl: './herb-detail.component.html',
  styleUrls: ['./herb-detail.component.css']
})
export class HerbDetailComponent implements OnInit {
  herb: Herb;
  herbId: number | string;
  tableTitle = '';
  pageSizeOptions = [5, 10, 50, 100];
  relatedHerbs: Herb[];
  compounds: Compound[];
  pageMeta: PageMeta | null;
  dataSource = new MatTableDataSource();
  relatedHerbId: number | string;
  includeParams =
    '&exclude[]=prescription_set.*&include[]=prescription_set.id' +
    '&include[]=prescription_set.chinese_name&include[]=prescription_set.english_name';
    // '&include[]=compounds.id&exclude[]=compounds.*'
    // '&include[]=subherb_set.id&exclude[]=subherb_set.*'
  displayedColumns = ['english_name', 'formula', 'mol_weight', 'category', 'alogp',
                      'cid', 'cas', 'psa', 'hba', 'hbd', 'rtb'];
  allColumns = ['english_name', 'chinese_name', 'formula', 'mol_weight', 'category', 'alogp',
    'psa', 'hba', 'hbd', 'rtb'];
  constructor(private rest: RestService,
              private globalService: GlobalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('herb-detail init');
    this._getHerb();
  }

  gotoHerbDetail(hid: number | string) {
    this.router.navigate(['herb', hid]);
  }

  generaterTcmidUrl(pinyinName: string): string {
     const newPinyinName = pinyinName.split(' ').join('+');
     // console.log(newPinyinName);
     return `http://megabionet.org/tcmid/herbsearch/?chinese_Name=${newPinyinName}&english_Name=`;
  }

  gotoPrescriptionDetail(prescriptionId: number | string) {
    this.router.navigate(['prescription', prescriptionId]);
  }

  private _getHerb() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.herbId = +params.get('id');
      this.rest.getData(`herbs/${this.herbId}/?${this.includeParams}`)
        .subscribe(data => {
          this.herb = data['herb'];
        });
    });
  }

}
