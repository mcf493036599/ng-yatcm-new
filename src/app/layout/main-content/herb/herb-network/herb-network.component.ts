import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RestService} from '../../../../services/rest/rest.service';
import {Herb} from '../../../../yatcm/models/herb';
import {Prescription} from '../../../../yatcm/models/prescription';
import {Compound} from '../../../../yatcm/models/compound';

@Component({
  selector: 'app-herb-network-data',
  templateUrl: './herb-network.component.html',
  styleUrls: ['./herb-network.component.css']
})

export class HerbNetworkComponent implements OnInit {
  herbId: number;
  body: object;
  restUrl: string;
  constructor(private route: ActivatedRoute,
              private rest: RestService) {
  }

  ngOnInit() {
    console.log('herb network init');
    this.restUrl = `herbs/herb_network/`;
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.herbId = +params.get('id');
      this.body = {herb_id: this.herbId};
    });
  }

}
