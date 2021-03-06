import {CommonModule} from '@angular/common';
import {ChemblIdActivityIdToTargetChemblIdPipe} from './chembl-id-activity-id-to-target-chembl-id.pipe';
import {NgModule} from '@angular/core';
import {PathwayNumberPipe} from './pathway-number.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChemblIdActivityIdToTargetChemblIdPipe,
    PathwayNumberPipe,
  ],
  exports: [ChemblIdActivityIdToTargetChemblIdPipe, PathwayNumberPipe]
})
export class PipesModule { }
