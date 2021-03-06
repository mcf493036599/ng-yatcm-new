import {Component, Inject, OnInit} from '@angular/core';
import {RestService} from '../../../services/rest/rest.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Compound} from '../../../yatcm/models/compound';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compound-card',
  templateUrl: './compound-card.component.html',
  styleUrls: ['./compound-card.component.css']
})
export class CompoundCardComponent implements OnInit {
  compound: Compound;
  prescriptionId: number;
  diseaseId: number;
  constructor(private rest: RestService,
              public dialogRef: MatDialogRef<CompoundCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) {

  }

  ngOnInit() {
    if (this.data.prescriptionId) {
      this.prescriptionId = this.data.prescriptionId;
    } else if (this.data.diseaseId) {
      this.diseaseId = this.data.diseaseId;
    }
   this.rest.getDataList(`compounds/?filter{id}=${this.data.compoundId}`, 0, 999)
      .subscribe(data => {
        this.compound = data['compounds'][0];
      });
  }

  kclose() {
    this.dialogRef.close();
  }

  gotoCompoundNetwork() {
    this.router.navigate(['network-datatable/network'], {queryParams: {
      compoundId: this.data.compoundId
    }});
  }
}
