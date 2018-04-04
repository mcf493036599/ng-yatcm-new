import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {DocCardComponent} from './doc-card/doc-card.component';
import {AssayCardComponent} from './assay-card/assay-card.component';
import {ChemblRelatedTargetCardComponent} from './chembl-related-target-card/chembl-related-target-card.component';
import {NgModule} from '@angular/core';
import {YatcmSimilarityKeggCompoundCardComponent} from "./yatcm-similarity-kegg-compound-card/yatcm-similarity-kegg-compound-card.component";
import {KeggproteinToTargetComponent} from "./keggprotein-to-target/keggprotein-to-target.component";
import {CompoundCardComponent} from "./compound-card/compound-card.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    DocCardComponent,
    AssayCardComponent,
    ChemblRelatedTargetCardComponent,
    YatcmSimilarityKeggCompoundCardComponent,
    KeggproteinToTargetComponent,
    CompoundCardComponent
  ],
  exports: [
    DocCardComponent,
    AssayCardComponent,
    ChemblRelatedTargetCardComponent,
    YatcmSimilarityKeggCompoundCardComponent,
    KeggproteinToTargetComponent,
    CompoundCardComponent
  ],
  entryComponents: [
    DocCardComponent,
    AssayCardComponent,
    ChemblRelatedTargetCardComponent,
    YatcmSimilarityKeggCompoundCardComponent,
    KeggproteinToTargetComponent,
    CompoundCardComponent
  ]
})

export class CardModule { }
