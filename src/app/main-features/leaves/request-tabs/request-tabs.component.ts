import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
export interface totalApprovalElement {
  name: string;
  position: number;
  type: number;
  date: string;
  status:string;
  eitID:string;
}

const ELEMENT_DATA: totalApprovalElement[] = [
  {position: 1, name: 'Hydrogen', type: 1.0079, date: 'H',status:'Accepted',eitID:""},
  {position: 2, name: 'Helium', type: 4.0026, date: 'He',status:'Accepted',eitID:""},
  {position: 3, name: 'Lithium', type: 6.941, date: 'Li',status:'Accepted',eitID:""},
  {position: 4, name: 'Beryllium', type: 9.0122, date: 'Be',status:'Accepted',eitID:""},
  {position: 5, name: 'Boron', type: 10.811, date: 'B',status:'Accepted',eitID:""},
  {position: 6, name: 'Carbon', type: 12.0107, date: 'C',status:'Accepted',eitID:""},
  {position: 7, name: 'Nitrogen', type: 14.0067, date: 'N',status:'Accepted',eitID:""},
  {position: 8, name: 'Oxygen', type: 15.9994, date: 'O',status:'Accepted',eitID:""},
  {position: 9, name: 'Fluorine', type: 18.9984, date: 'F',status:'Accepted',eitID:""},
  {position: 10, name: 'Neon', type: 20.1797, date: 'Ne',status:'Accepted',eitID:""},
];
@Component({
    selector: 'app-request-tabs',
    standalone: true,
    templateUrl: './request-tabs.component.html',
    styleUrl: './request-tabs.component.scss',
    imports: [CommonModule, MatTabsModule]
})
export class RequestTabsComponent {
  displayedColumns: string[] = ['#', 'Name', 'EIT ID', 'Type','Date','Status'];
  dataSource = ELEMENT_DATA;
}
