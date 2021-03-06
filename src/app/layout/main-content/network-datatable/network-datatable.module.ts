import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NetworkDatatableRoutingModule} from './network-datatable-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ContainerModule} from '../../container/container.module';
import {
  HerbHerbSharedTargetNetworkDataListComponent
} from './herb-herb-shared-target-network-data-list/herb-herb-shared-target-network-data-list.component';
import {
  HerbHerbSharedDiseaseNetworkDataListComponent
} from './herb-herb-shared-disease-network-data-list/herb-herb-shared-disease-network-data-list.component';
import {
  HerbHerbNetworkSharedPathwayListComponent
} from './herb-herb-network-shared-pathway-list/herb-herb-network-shared-pathway-list.component';
import { PherbPherbSharedTargetListComponent } from './pherb-pherb-shared-target-list/pherb-pherb-shared-target-list.component';
import { PherbPherbSharedDiseaseListComponent } from './pherb-pherb-shared-disease-list/pherb-pherb-shared-disease-list.component';
import {SpliceNetworkComponent} from './splice-network/splice-network.component';

@NgModule({
  imports: [
    CommonModule,
    NetworkDatatableRoutingModule,
    SharedModule,
    ContainerModule
  ],
  declarations: [
    HerbHerbSharedTargetNetworkDataListComponent,
    HerbHerbSharedDiseaseNetworkDataListComponent,
    HerbHerbNetworkSharedPathwayListComponent,
    PherbPherbSharedTargetListComponent,
    PherbPherbSharedDiseaseListComponent,
    SpliceNetworkComponent
  ]
})
export class NetworkDatatableModule { }
